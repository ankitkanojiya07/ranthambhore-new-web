import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AuthFieldLabel, AuthInput } from "#/components/auth/AuthCard";
import {
	createDailyUpdateMutationOptions,
	type DailyUpdateFormInput,
} from "#/components/daily-updates/queries/daily-updates.mutation";
import {
	formInputClasses,
	formSpacingClass,
} from "#/components/forms/form-field";
import { Button } from "#/components/ui/button";
import { BLOG_ZONE_OPTIONS } from "#/constants/blog-zones";
import { Image } from "#/util/Image";

export function DailyUpdateForm() {
	const [submitterName, setSubmitterName] = useState("");
	const [submitterEmail, setSubmitterEmail] = useState("");
	const [title, setTitle] = useState("");
	const [zoneId, setZoneId] = useState("");
	const [spottedDate, setSpottedDate] = useState("");
	const [content, setContent] = useState("");
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

	useEffect(() => {
		if (!imageFile) {
			setImagePreviewUrl(null);
			return;
		}

		const url = URL.createObjectURL(imageFile);
		setImagePreviewUrl(url);

		return () => {
			URL.revokeObjectURL(url);
		};
	}, [imageFile]);

	const mutation = useMutation({
		...createDailyUpdateMutationOptions,
	});

	function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0] ?? null;
		setImageFile(file);
	}

	function handleClearImage() {
		setImageFile(null);
	}

	function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		const input: DailyUpdateFormInput = {
			submitterName,
			submitterEmail,
			title,
			content,
			zoneId,
			type: "daily_update",
			status: "published",
			imageFile,
			...(spottedDate
				? { spottedDate: new Date(`${spottedDate}T00:00:00`) }
				: {}),
		};
		mutation.mutate(input);
	}

	if (mutation.isSuccess) {
		return (
			<output className="block rounded-xl border border-forest-200 bg-forest-50 p-6 text-center">
				<h2 className="font-display text-2xl text-forest-800">
					Update submitted for approval
				</h2>
				<p className="mt-2 font-body text-charcoal-700">
					Thank you for sharing your sighting. It will appear on the website
					after it has been approved.
				</p>
			</output>
		);
	}

	return (
		<form onSubmit={handleSubmit} className={formSpacingClass}>
			<div>
				<AuthFieldLabel htmlFor="daily-update-submitter-name">
					Your Name
				</AuthFieldLabel>
				<AuthInput
					id="daily-update-submitter-name"
					type="text"
					autoComplete="name"
					maxLength={120}
					value={submitterName}
					onChange={(event) => setSubmitterName(event.target.value)}
					placeholder="Enter your name"
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-submitter-email">
					Email Address
				</AuthFieldLabel>
				<AuthInput
					id="daily-update-submitter-email"
					type="email"
					autoComplete="email"
					value={submitterEmail}
					onChange={(event) => setSubmitterEmail(event.target.value)}
					placeholder="you@example.com"
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-title" required>
					Title
				</AuthFieldLabel>
				<AuthInput
					id="daily-update-title"
					type="text"
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Tiger sighting at Padam Talao"
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-zone" required>
					Zone
				</AuthFieldLabel>
				<select
					id="daily-update-zone"
					required
					value={zoneId}
					onChange={(event) => setZoneId(event.target.value)}
					className={formInputClasses}
				>
					<option value="" disabled>
						Select a zone
					</option>
					{BLOG_ZONE_OPTIONS.map((zone) => (
						<option key={zone.id} value={zone.id}>
							{zone.label}
						</option>
					))}
				</select>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-spotted-date">
					Spotted Date
				</AuthFieldLabel>
				<AuthInput
					id="daily-update-spotted-date"
					type="date"
					value={spottedDate}
					onChange={(event) => setSpottedDate(event.target.value)}
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-content" required>
					Content
				</AuthFieldLabel>
				<textarea
					id="daily-update-content"
					required
					rows={6}
					value={content}
					onChange={(event) => setContent(event.target.value)}
					placeholder="Describe the sighting..."
					className={formInputClasses}
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="daily-update-image">Image</AuthFieldLabel>
				<input
					id="daily-update-image"
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className="block w-full font-body text-sm text-charcoal-700 file:mr-4 file:rounded-full file:border-0 file:bg-forest-500 file:px-4 file:py-2 file:font-display file:text-xs file:uppercase file:text-sand-50 hover:file:bg-forest-600"
				/>
				{imagePreviewUrl && (
					<div className="mt-3 flex items-start gap-4">
						<Image
							src={imagePreviewUrl}
							alt="Selected cover preview"
							className="h-32 w-32 rounded-lg border border-muted-300 object-cover"
						/>
						<Button type="button" variant="outline" onClick={handleClearImage}>
							Remove
						</Button>
					</div>
				)}
			</div>

			{mutation.error && (
				<p className="rounded border border-earth-200 bg-earth-50 px-4 py-3 font-body text-sm text-earth-800">
					{mutation.error instanceof Error &&
					mutation.error.message.includes("File size too large")
						? "Image is too large even after compression. Try a smaller photo or lower resolution."
						: mutation.error instanceof Error
							? mutation.error.message
							: "Unable to create daily update. Please try again."}
				</p>
			)}

			<Button type="submit" className="w-full" loading={mutation.isPending}>
				Submit for Approval
			</Button>
		</form>
	);
}
