import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SignInForm } from "#/components/auth/SignInForm";
import { resolveAuthRedirect } from "#/lib/auth-redirect";
import { buildPageHead } from "#/lib/seo";

const signInSearchSchema = z.object({
	redirect: z.string().optional(),
});

export const Route = createFileRoute("/(main)/sign-in")({
	validateSearch: (search) => signInSearchSchema.parse(search),
	component: SignInPage,
	head: () =>
		buildPageHead({
			title: "Sign In | Ranthambhor.com",
			description: "Sign in to Ranthambhor.com to publish wildlife updates.",
			path: "/sign-in",
			noindex: true,
		}),
});

function SignInPage() {
	const { redirect } = Route.useSearch();

	return <SignInForm redirectTo={resolveAuthRedirect(redirect)} />;
}
