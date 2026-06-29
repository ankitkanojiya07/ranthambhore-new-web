import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "#/components/auth/SignUpForm";

export const Route = createFileRoute("/(main)/sign-up")({
	component: SignUpPage,
	head: () => ({
		meta: [{ title: "Sign Up | Ranthambhore.com" }],
	}),
});

function SignUpPage() {
	return <SignUpForm />;
}
