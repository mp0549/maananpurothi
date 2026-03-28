/**
 * remove-backgrounds.mjs
 * Removes backgrounds from all images in /public/accents/ using
 * @imgly/background-removal-node, saving -nobg.png versions to
 * /public/accents/nobg/
 */

import { removeBackground } from '@imgly/background-removal-node';
import { readdir, mkdir, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname, basename } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const INPUT_DIR = join(__dirname, '..', 'public', 'accents');
const OUTPUT_DIR = join(INPUT_DIR, 'nobg');

const SUPPORTED = new Set(['.png', '.jpg', '.jpeg', '.avif', '.webp']);

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
    console.log(`Created output directory: ${OUTPUT_DIR}`);
  }

  const entries = await readdir(INPUT_DIR);
  const files = entries.filter(name => {
    const ext = extname(name).toLowerCase();
    return SUPPORTED.has(ext) && !name.includes('-nobg');
  });

  if (files.length === 0) {
    console.log('No eligible files found in /public/accents/');
    return;
  }

  console.log(`Found ${files.length} file(s) to process:\n`);

  for (const file of files) {
    const inputPath = join(INPUT_DIR, file);
    const stem = basename(file, extname(file));
    const outputName = `${stem}-nobg.png`;
    const outputPath = join(OUTPUT_DIR, outputName);

    if (existsSync(outputPath)) {
      console.log(`  ⏭  Skipping ${file} (${outputName} already exists)`);
      continue;
    }

    process.stdout.write(`  ⏳ Processing ${file} → ${outputName} ...`);
    try {
      // Pass a file:// URL — the most reliable input for this library
      const fileUrl = pathToFileURL(inputPath).href;
      const resultBlob = await removeBackground(fileUrl, {
        model: 'small',
        output: { format: 'image/png', quality: 1 },
      });
      const arrayBuffer = await resultBlob.arrayBuffer();
      await writeFile(outputPath, Buffer.from(arrayBuffer));
      console.log(' ✓ done');
    } catch (err) {
      console.log(` ✗ FAILED`);
      console.error(`     ${err.message}`);
    }
  }

  console.log('\nAll done. Output files are in public/accents/nobg/');
}

main();
