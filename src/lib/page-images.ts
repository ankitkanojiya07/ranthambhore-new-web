/** Rotating gallery images for content page sections */
export const PAGE_IMAGES = [
	"/gallery/1.jpg",
	"/gallery/2.jpg",
	"/gallery/3.jpg",
	"/gallery/4.jpg",
	"/gallery/5.jpg",
	"/gallery/6.jpg",
	"/gallery/7.jpg",
	"/gallery/8.jpg",
	"/gallery/9.jpg",
	"/gallery/10.jpg",
	"/gallery/11.jpg",
	"/gallery/12.jpg",
	"/gallery/13.jpg",
	"/gallery/14.jpg",
	"/hero/1.webp",
	"/hero/2.webp",
	"/hero/3.webp",
	"/hero/4.webp",
] as const;

export function getPageImage(index: number): string {
	return PAGE_IMAGES[index % PAGE_IMAGES.length] ?? "/tiger.png";
}
