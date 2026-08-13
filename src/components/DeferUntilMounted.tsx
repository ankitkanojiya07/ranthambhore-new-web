import { type ReactNode, useEffect, useState } from "react";

export function DeferUntilMounted({
	children,
	fallback = null,
}: {
	children: ReactNode;
	fallback?: ReactNode;
}) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => setMounted(true));
		return () => window.cancelAnimationFrame(frame);
	}, []);

	if (!mounted) {
		return fallback;
	}

	return children;
}
