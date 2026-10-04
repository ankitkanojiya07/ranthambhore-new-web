import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SignUpForm } from "#/components/auth/SignUpForm";
import { resolveAuthRedirect } from "#/lib/auth-redirect";
import { buildPageHead } from "#/lib/seo";

const signUpSearchSchema = z.object({
	redirect: z.string().optional(),
});

export const Route = createFileRoute("/(main)/sign-up")({
	validateSearch: (search) => signUpSearchSchema.parse(search),
	component: SignUpPage,
	head: () =>
		buildPageHead({
			title: "Sign Up | Ranthambhor.com",
			description:
				"Create a Ranthambhor.com account to publish wildlife updates.",
			path: "/sign-up",
			noindex: true,
		}),
});

function SignUpPage() {
	const { redirect } = Route.useSearch();

	return <SignUpForm redirectTo={resolveAuthRedirect(redirect)} />;
}
