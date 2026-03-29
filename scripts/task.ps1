#Requires -Version 5.1
<#
.SYNOPSIS
    Task runner for The Cartographer's Study (Astro project).

.DESCRIPTION
    A simple PowerShell task runner. Available tasks:
      dev     - Start the Astro dev server
      build   - Build the project for production
      deploy  - Build then deploy to Vercel
      ship    - Stage, commit, build, deploy to Vercel, then push to git
      lint    - Check TypeScript types + Astro check
      setup   - Install dependencies

.EXAMPLE
    .\scripts\task.ps1 dev
    .\scripts\task.ps1 deploy
    .\scripts\task.ps1 ship
    .\scripts\task.ps1 ship "Redesigned homepage"
    .\scripts\task.ps1 ship -Message "Redesigned homepage"
    .\scripts\task.ps1 lint

.NOTES
    Requires Node.js and npm. The deploy and ship tasks also require the
    Vercel CLI (install globally with: npm i -g vercel).
#>

param(
    [Parameter(Position = 0, Mandatory = $true)]
    [ValidateSet('dev', 'build', 'deploy', 'ship', 'lint', 'setup')]
    [string]$Task,

    [Parameter(Position = 1)]
    [string]$Message = 'Updated site'
)

# -- Helpers ------------------------------------------------------------------

function Write-Step {
    param([string]$Msg)
    Write-Host ""
    Write-Host "  >>  $Msg" -ForegroundColor DarkYellow
    Write-Host ""
}

function Write-Success {
    param([string]$Msg)
    Write-Host "  OK  $Msg" -ForegroundColor Green
}

function Write-Fail {
    param([string]$Msg)
    Write-Host "  !!  $Msg" -ForegroundColor Red
}

function Invoke-Step {
    param(
        [string]$Label,
        [scriptblock]$ScriptBlock
    )
    Write-Step $Label
    & $ScriptBlock
    if ($LASTEXITCODE -ne 0) {
        Write-Fail "Step failed (exit code $LASTEXITCODE). Aborting."
        exit $LASTEXITCODE
    }
}

# Ensure we always run from the project root (one directory above /scripts/)
$ProjectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $ProjectRoot
Write-Host ""
Write-Host "  The Cartographer's Study -- Task Runner" -ForegroundColor DarkCyan
Write-Host "  Working directory: $ProjectRoot" -ForegroundColor DarkGray

# -- Tasks --------------------------------------------------------------------

switch ($Task) {

    # dev: start the Astro development server
    'dev' {
        Write-Step "Starting development server..."
        Invoke-Step "npm run dev" {
            npm run dev
        }
    }

    # build: compile the project for production
    'build' {
        Invoke-Step "Building project for production..." {
            npm run build
        }
        Write-Success "Build complete. Output is in ./dist/"
    }

    # deploy: build first, then push to Vercel
    'deploy' {
        $vercelPath = Get-Command vercel -ErrorAction SilentlyContinue
        if (-not $vercelPath) {
            Write-Fail "Vercel CLI not found. Install it with: npm i -g vercel"
            exit 1
        }

        Invoke-Step "Building for production..." {
            npm run build
        }
        Write-Success "Build complete."

        Invoke-Step "Deploying to Vercel..." {
            vercel --prod
        }
        Write-Success "Deploy complete. Check the Vercel dashboard for the live URL."
    }

    # ship: stage -> commit -> build -> vercel deploy -> git push
    'ship' {
        $vercelPath = Get-Command vercel -ErrorAction SilentlyContinue
        if (-not $vercelPath) {
            Write-Fail "Vercel CLI not found. Install it with: npm i -g vercel"
            exit 1
        }

        Invoke-Step "Staging all changes..." {
            git add .
        }

        Invoke-Step "Committing with message: $Message" {
            git commit -m "$Message"
        }

        Invoke-Step "Building for production..." {
            npm run build
        }
        Write-Success "Build complete."

        Invoke-Step "Deploying to Vercel..." {
            vercel --prod
        }
        Write-Success "Vercel deploy complete."

        Invoke-Step "Pushing to remote..." {
            git push
        }
        Write-Success "Shipped. All done."
    }

    # lint: TypeScript type-check + Astro check
    'lint' {
        Write-Step "Running Astro type-check..."
        Invoke-Step "astro check" {
            npm run astro -- check
        }
        Write-Success "No type errors found."
    }

    # setup: install all npm dependencies
    'setup' {
        Invoke-Step "Installing dependencies..." {
            npm install
        }
        Write-Success "Setup complete. Run .\scripts\task.ps1 dev to start the dev server."
    }
}
