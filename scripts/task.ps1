#Requires -Version 5.1
<#
.SYNOPSIS
    Task runner for The Cartographer's Study (Astro project).

.DESCRIPTION
    A simple PowerShell task runner. Available tasks:
      dev     — Start the Astro dev server
      build   — Build the project for production
      deploy  — Build then deploy to Vercel
      lint    — Check TypeScript types + Astro check
      setup   — Install dependencies

.EXAMPLE
    .\scripts\task.ps1 dev
    .\scripts\task.ps1 deploy
    .\scripts\task.ps1 lint

.NOTES
    Requires Node.js and npm. The 'deploy' task also requires the Vercel CLI
    (install globally with: npm i -g vercel).
#>

param(
    [Parameter(Position = 0, Mandatory = $true)]
    [ValidateSet('dev', 'build', 'deploy', 'lint', 'setup')]
    [string]$Task
)

# ── Helpers ──────────────────────────────────────────────────────────────────

function Write-Step {
    param([string]$Message)
    Write-Host ""
    Write-Host "  ✦  $Message" -ForegroundColor DarkYellow
    Write-Host ""
}

function Write-Success {
    param([string]$Message)
    Write-Host "  ✓  $Message" -ForegroundColor Green
}

function Write-Fail {
    param([string]$Message)
    Write-Host "  ✗  $Message" -ForegroundColor Red
}

function Invoke-Task {
    param(
        [string]$Label,
        [scriptblock]$ScriptBlock
    )
    Write-Step $Label
    & $ScriptBlock
    if ($LASTEXITCODE -ne 0) {
        Write-Fail "Task '$Task' failed (exit code $LASTEXITCODE)."
        exit $LASTEXITCODE
    }
}

# Ensure we always run from the project root (one directory above /scripts/)
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot
Write-Host ""
Write-Host "  The Cartographer's Study — Task Runner" -ForegroundColor DarkCyan
Write-Host "  Working directory: $ProjectRoot" -ForegroundColor DarkGray

# ── Tasks ────────────────────────────────────────────────────────────────────

switch ($Task) {

    # ── dev: start the Astro development server ───────────────────────────────
    'dev' {
        Write-Step "Starting development server..."
        Invoke-Task "npm run dev" {
            npm run dev
        }
    }

    # ── build: compile the project for production ─────────────────────────────
    'build' {
        Invoke-Task "Building project for production..." {
            npm run build
        }
        Write-Success "Build complete. Output is in ./dist/"
    }

    # ── deploy: build first, then push to Vercel ──────────────────────────────
    'deploy' {
        # Check that the Vercel CLI is available
        $vercelPath = Get-Command vercel -ErrorAction SilentlyContinue
        if (-not $vercelPath) {
            Write-Fail "Vercel CLI not found. Install it with:  npm i -g vercel"
            exit 1
        }

        # Build is a prerequisite for deploy
        Write-Step "Running build before deploy..."
        npm run build
        if ($LASTEXITCODE -ne 0) {
            Write-Fail "Build failed — aborting deploy."
            exit $LASTEXITCODE
        }
        Write-Success "Build complete."

        # Deploy
        Invoke-Task "Deploying to Vercel..." {
            vercel --prod
        }
        Write-Success "Deploy complete. Check the Vercel dashboard for the live URL."
    }

    # ── lint: TypeScript type-check + Astro check ─────────────────────────────
    'lint' {
        Write-Step "Running Astro type-check..."
        Invoke-Task "astro check" {
            npm run astro -- check
        }
        Write-Success "No type errors found."
    }

    # ── setup: install all npm dependencies ───────────────────────────────────
    'setup' {
        Invoke-Task "Installing dependencies..." {
            npm install
        }
        Write-Success "Setup complete. Run '.\scripts\task.ps1 dev' to start the dev server."
    }
}
