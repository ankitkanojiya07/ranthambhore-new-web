/// <reference types="bun-types" />
import { encode } from "blurhash";
import { blurhashToCssGradientString } from "@unpic/placeholder";
import { getPixels } from "@unpic/pixels";

async function getImagePixels(file: string) {
  const data = await Bun.file(`./public/${file}`).arrayBuffer();
  const png = await new Bun.Image(data)
    .resize(64, 64, { fit: "inside", withoutEnlargement: true })
    .png()
    .bytes();
  return await getPixels(png);
}

function hasTransparency(data: Uint8Array) {
	for (let i = 3; i < data.length; i += 4) {
		if (data[i] < 255) return true;
	}
	return false;
}

async function generate() {
  const glob = new Bun.Glob("**/*.{jpg,jpeg,png,webp}");
  const result: Record<string, string> = {};

  for await (const file of glob.scan("./public")) {
    const path = `/${file}`;
    try {
      const pixels = await getImagePixels(file);

			if (hasTransparency(pixels.data)) {
        result[path] = "transparent";
        console.log(`↩ transparent: ${path}`);
        continue;
      }

      const hash = encode(
        Uint8ClampedArray.from(pixels.data),
        pixels.width,
        pixels.height,
        4,
        4,
      );
      result[path] = blurhashToCssGradientString(hash);
      console.log(`✓ ${path}`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`⚠ skipped ${path}: ${message}`);
    }
  }

  await Bun.write("./src/lib/placeholders.json", JSON.stringify(result, null, 2));
}

generate();