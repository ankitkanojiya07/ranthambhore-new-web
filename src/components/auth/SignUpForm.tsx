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

export function SignUpForm({
	redirectTo = AUTH_DEFAULT_REDIRECT,
}: {
	redirectTo?: string;
}) {
	const navigate = useNavigate();
	const destination = resolveAuthRedirect(redirectTo);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setError(null);

		if (password !== confirmPassword) {
			setError("Passwords do not match.");
			return;
		}

		if (password.length < 8) {
			setError("Password must be at least 8 characters.");
			return;
		}

		setLoading(true);

		const { error: signUpError } = await authClient.signUp.email({
			name,
			email,
			password,
			callbackURL: `${window.location.origin}${destination}`,
		});

		setLoading(false);

		if (signUpError) {
			setError(signUpError.message ?? "Unable to sign up. Please try again.");
			return;
		}

		await navigate({ href: destination });
	}

	return (
		<AuthCard
			title="Create Account"
			subtitle="Join Ranthambhore.com to plan your safari"
			footer={
				<p className="font-body text-sm text-charcoal-600">
					Already have an account?{" "}
					<Link
						to="/sign-in"
						className="font-medium text-forest-600 hover:text-forest-700"
					>
						Sign in
					</Link>
				</p>
			}
		>
			<form onSubmit={handleSubmit} className={formSpacingClass}>
				<div>
					<AuthFieldLabel htmlFor="sign-up-name" required>
						Full Name
					</AuthFieldLabel>
					<AuthInput
						id="sign-up-name"
						type="text"
						autoComplete="name"
						required
						value={name}
						onChange={(event) => setName(event.target.value)}
						placeholder="Your name"
					/>
				</div>
				<div>
					<AuthFieldLabel htmlFor="sign-up-email" required>
						Email
					</AuthFieldLabel>
					<AuthInput
						id="sign-up-email"
						type="email"
						autoComplete="email"
						required
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="you@example.com"
					/>
				</div>
				<div>
					<AuthFieldLabel htmlFor="sign-up-password" required>
						Password
					</AuthFieldLabel>
					<AuthInput
						id="sign-up-password"
						type="password"
						autoComplete="new-password"
						required
						minLength={8}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="At least 8 characters"
					/>
				</div>
				<div>
					<AuthFieldLabel htmlFor="sign-up-confirm-password" required>
						Confirm Password
					</AuthFieldLabel>
					<AuthInput
						id="sign-up-confirm-password"
						type="password"
						autoComplete="new-password"
						required
						minLength={8}
						value={confirmPassword}
						onChange={(event) => setConfirmPassword(event.target.value)}
						placeholder="Repeat your password"
					/>
				</div>
				{error && (
					<p className="rounded border border-earth-200 bg-earth-50 px-4 py-3 font-body text-sm text-earth-800">
						{error}
					</p>
				)}
				<Button type="submit" className="w-full" loading={loading}>
					Create Account
				</Button>
			</form>
		</AuthCard>
	);
}
