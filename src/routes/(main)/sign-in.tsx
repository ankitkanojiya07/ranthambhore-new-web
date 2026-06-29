import { createFileRoute } from "@tanstack/react-router";
import { SignInForm } from "#/components/auth/SignInForm";

export const Route = createFileRoute("/(main)/sign-in")({
	component: SignInPage,
	head: () => ({
		meta: [{ title: "Sign In | Ranthambhore.com" }],
	}),
});

function SignInPage() {
	return <SignInForm />;
}
