import { Link } from "@tanstack/react-router";
import { authClient } from "#/lib/auth-client";

const linkClasses =
	"font-body font-medium text-sm text-charcoal-700 transition-colors hover:text-earth-700";

export function AuthNavActions() {
	const { data: session, isPending } = authClient.useSession();

	if (isPending) {
		return (
			<li>
				<span className="inline-block h-4 w-16 animate-pulse rounded bg-muted-200" />
			</li>
		);
	}

	if (session?.user) {
		return (
			<li>
				<button type="button" onClick={() => authClient.signOut()} className={linkClasses}>
					Sign Out
				</button>
			</li>
		);
	}

	return (
		<li>
			<Link to="/sign-in" className={linkClasses}>
				Sign In
			</Link>
		</li>
	);
}
