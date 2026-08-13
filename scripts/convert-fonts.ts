/// <reference types="bun-types" />
import { join } from "node:path";
// @ts-expect-error -- wawoff2 ships without TypeScript types
import { compress } from "wawoff2";

const FONTS_DIR = join(import.meta.dir, "..", "src", "fonts");
const WEIGHTS = [
	"vonca-regular.otf",
	"vonca-medium.otf",
	"vonca-semibold.otf",
	"vonca-bold.otf",
] as const;

async function main() {
	for (const filename of WEIGHTS) {
		const inputPath = join(FONTS_DIR, filename);
		const outputPath = inputPath.replace(/\.otf$/i, ".woff2");
		const input = await Bun.file(inputPath).bytes();
		const output = await compress(input);
		await Bun.write(outputPath, output);
		console.log(
			`✓ ${filename}  ${(input.byteLength / 1024).toFixed(0)}KB → ${(output.byteLength / 1024).toFixed(0)}KB`,
		);
	}
}

await main();
