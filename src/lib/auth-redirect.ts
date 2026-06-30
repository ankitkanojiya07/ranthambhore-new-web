export const AUTH_DEFAULT_REDIRECT = "/highlights/ranthambhore-insights/new";

export function resolveAuthRedirect(redirect?: string): string {
	if (redirect?.startsWith("/") && !redirect.startsWith("//")) {
		return redirect;
	}

	return AUTH_DEFAULT_REDIRECT;
}
