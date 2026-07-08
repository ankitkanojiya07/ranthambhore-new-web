import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
	AuthCard,
	AuthFieldLabel,
	AuthInput,
} from "#/components/auth/AuthCard";
import { Button } from "#/components/ui/button";
import { formSpacingClass } from "#/components/forms/form-field";
import { authClient } from "#/lib/auth-client";
import {
	AUTH_DEFAULT_REDIRECT,
	resolveAuthRedirect,
} from "#/lib/auth-redirect";

export function SignInForm({
	redirectTo = AUTH_DEFAULT_REDIRECT,
}: {
	redirectTo?: string;
}) {
	const navigate = useNavigate();
	const destination = resolveAuthRedirect(redirectTo);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);
		setLoading(true);

		const { error: signInError } = await authClient.signIn.email({
			email,
			password,
			callbackURL: `${window.location.origin}${destination}`,
		});

		setLoading(false);

		if (signInError) {
			setError(signInError.message ?? "Unable to sign in. Please try again.");
			return;
		}

		await navigate({ href: destination });
	}

	return (
		<AuthCard
			title="Sign In"
			subtitle="Welcome back to Ranthambhore.com"
			footer={
				<p className="font-body text-sm text-charcoal-600">
					Don&apos;t have an account?{" "}
					<Link
						to="/sign-up"
						className="font-medium text-forest-600 hover:text-forest-700"
					>
						Sign up
					</Link>
				</p>
			}
		>
			<form onSubmit={handleSubmit} className={formSpacingClass}>
				<div>
					<AuthFieldLabel htmlFor="sign-in-email" required>
						Email
					</AuthFieldLabel>
					<AuthInput
						id="sign-in-email"
						type="email"
						autoComplete="email"
						required
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="you@example.com"
					/>
				</div>
				<div>
					<AuthFieldLabel htmlFor="sign-in-password" required>
						Password
					</AuthFieldLabel>
					<AuthInput
						id="sign-in-password"
						type="password"
						autoComplete="current-password"
						required
						minLength={8}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="Your password"
					/>
				</div>
				{error && (
					<p className="rounded border border-earth-200 bg-earth-50 px-4 py-3 font-body text-sm text-earth-800">
						{error}
					</p>
				)}
				<Button type="submit" className="w-full" loading={loading}>
					Sign In
				</Button>
			</form>
		</AuthCard>
	);
}
