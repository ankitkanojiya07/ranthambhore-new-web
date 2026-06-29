import { Link } from "@tanstack/react-router";
import { authClient } from "#/lib/auth-client";
import { cn } from "#/lib/utils";
import { Button } from "../ui/button";

export function AuthNavActions({ navOverlay }: { navOverlay: boolean }) {
	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return (
			<div
				className={cn(
					"hidden h-9 w-24 animate-pulse rounded-full bg-muted-200 sm:block",
					navOverlay && "bg-white/20",
				)}
			/>
		);
	}

	if (session?.user) {
		return (
			<div className="flex items-center gap-2 sm:gap-3">
				<span
					className={cn(
						"hidden max-w-[120px] truncate font-body text-xs text-charcoal-700 sm:inline",
						navOverlay && "text-sand-50",
					)}
				>
					{session.user.name}
				</span>
				<Button
					variant="outline"
					size="sm"
					className={cn(
						navOverlay &&
							"border-sand-50/70 text-sand-50 hover:bg-white/10 hover:text-sand-50",
					)}
					onClick={() => authClient.signOut()}
				>
					Sign Out
				</Button>
			</div>
		);
	}

	return (
		<Button
			variant="ghost"
			size="sm"
			className={cn(
				"hidden sm:inline-flex",
				navOverlay && "text-sand-50 hover:bg-white/10 hover:text-sand-50",
			)}
			render={<Link to="/sign-in" />}
		>
			Sign In
		</Button>
	);
}
