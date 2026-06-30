import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SignInForm } from "#/components/auth/SignInForm";
import { resolveAuthRedirect } from "#/lib/auth-redirect";

const signInSearchSchema = z.object({
	redirect: z.string().optional(),
});

export const Route = createFileRoute("/(main)/sign-in")({
	validateSearch: (search) => signInSearchSchema.parse(search),
	component: SignInPage,
	head: () => ({
		meta: [{ title: "Sign In | Ranthambhore.com" }],
	}),
});

function SignInPage() {
	const { redirect } = Route.useSearch();

	return <SignInForm redirectTo={resolveAuthRedirect(redirect)} />;
}
