/// <reference types="bun-types" />
import { mkdir, rename } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import sharp from "sharp";

const ROOT = join(import.meta.dir, "..", "public");
const SKIP_NAMES = new Set([
	"frame.png",
	"curve-line.png",
	"logo.png",
	"tiger-footstep.png",
]);
const MIN_BYTES = 80 * 1024;

function maxWidthFor(relativePath: string): number {
	if (relativePath.startsWith("hero/")) {
		return 1200;
	}
	return 1600;
}

async function optimizeFile(absolutePath: string, relativePath: string) {
	const file = Bun.file(absolutePath);
	const originalSize = file.size;
	if (originalSize < MIN_BYTES) {
		return;
	}

	const ext = extname(absolutePath).toLowerCase();
	if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
		return;
	}

	const image = sharp(absolutePath, { failOn: "none" }).rotate();
	const metadata = await image.metadata();
	const width = metadata.width ?? 0;
	const targetWidth = maxWidthFor(relativePath);
	const resized = width > targetWidth ? image.resize(targetWidth) : image;

	let output: Buffer;
	if (ext === ".png") {
		output = await resized.png({ compressionLevel: 9, effort: 7 }).toBuffer();
	} else if (ext === ".webp") {
		output = await resized.webp({ quality: 72, effort: 6 }).toBuffer();
	} else {
		output = await resized.jpeg({ quality: 75, mozjpeg: true }).toBuffer();
	}

	if (output.byteLength >= originalSize * 0.95) {
		return;
	}

	const tmpPath = `${absolutePath}.opt.tmp`;
	await mkdir(dirname(tmpPath), { recursive: true });
	await Bun.write(tmpPath, output);
	await rename(tmpPath, absolutePath);

	const saved = ((1 - output.byteLength / originalSize) * 100).toFixed(0);
	console.log(
		`✓ ${relativePath}  ${(originalSize / 1024).toFixed(0)}KB → ${(output.byteLength / 1024).toFixed(0)}KB  (−${saved}%)`,
	);
}

async function main() {
	const glob = new Bun.Glob("**/*.{jpg,jpeg,png,webp}");
	const files: string[] = [];

	for await (const file of glob.scan({ cwd: ROOT, dot: false })) {
		if (SKIP_NAMES.has(file.split("/").at(-1) ?? "")) {
			continue;
		}
		files.push(file);
	}

	files.sort();

	for (const relativePath of files) {
		try {
			await optimizeFile(join(ROOT, relativePath), relativePath);
		} catch (error) {
			const message = error instanceof Error ? error.message : String(error);
			console.warn(`⚠ skipped ${relativePath}: ${message}`);
		}
	}
}

await main();
