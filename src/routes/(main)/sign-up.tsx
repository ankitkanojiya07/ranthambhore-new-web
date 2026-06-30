import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { SignUpForm } from "#/components/auth/SignUpForm";
import { resolveAuthRedirect } from "#/lib/auth-redirect";

const signUpSearchSchema = z.object({
	redirect: z.string().optional(),
});

export const Route = createFileRoute("/(main)/sign-up")({
	validateSearch: (search) => signUpSearchSchema.parse(search),
	component: SignUpPage,
	head: () => ({
		meta: [{ title: "Sign Up | Ranthambhore.com" }],
	}),
});

function SignUpPage() {
	const { redirect } = Route.useSearch();

	return <SignUpForm redirectTo={resolveAuthRedirect(redirect)} />;
}
