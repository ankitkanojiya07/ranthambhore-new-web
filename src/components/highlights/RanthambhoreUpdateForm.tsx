import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AuthFieldLabel, AuthInput } from "#/components/auth/AuthCard";
import {
	createRanthambhoreUpdateMutationOptions,
	type RanthambhoreUpdateFormInput,
} from "#/components/highlights/queries/ranthambhore-updates.mutation";
import { Button } from "#/components/ui/button";
import {
	formInputClasses,
	formSpacingClass,
} from "#/components/forms/form-field";
import { BLOG_CATEGORY_OPTIONS } from "#/constants/blog-categories";

export function RanthambhoreUpdateForm() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
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
		...createRanthambhoreUpdateMutationOptions,
		onSuccess: async (data, variables, onMutateResult, context) => {
			await createRanthambhoreUpdateMutationOptions.onSuccess?.(
				data,
				variables,
				onMutateResult,
				context,
			);
			await navigate({ to: "/highlights/ranthambhore-insights" });
		},
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
		const input: RanthambhoreUpdateFormInput = {
			title,
			content,
			category,
			type: "ranthambhore_update",
			status: "published",
			imageFile,
			...(metaDescription.trim()
				? { metaDescription: metaDescription.trim() }
				: {}),
		};
		mutation.mutate(input);
	}

	return (
		<form onSubmit={handleSubmit} className={formSpacingClass}>
			<div>
				<AuthFieldLabel htmlFor="ranthambhore-update-title" required>
					Title
				</AuthFieldLabel>
				<AuthInput
					id="ranthambhore-update-title"
					type="text"
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Best time to visit Ranthambhore"
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="ranthambhore-update-category" required>
					Category
				</AuthFieldLabel>
				<select
					id="ranthambhore-update-category"
					required
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					className={formInputClasses}
				>
					<option value="" disabled>
						Select a category
					</option>
					{BLOG_CATEGORY_OPTIONS.map((option) => (
						<option key={option.slug} value={option.value}>
							{option.value}
						</option>
					))}
				</select>
			</div>

			<div>
				<AuthFieldLabel htmlFor="ranthambhore-update-summary">
					Summary
				</AuthFieldLabel>
				<AuthInput
					id="ranthambhore-update-summary"
					type="text"
					value={metaDescription}
					onChange={(event) => setMetaDescription(event.target.value)}
					placeholder="Short summary for search and previews"
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="ranthambhore-update-content" required>
					Content
				</AuthFieldLabel>
				<textarea
					id="ranthambhore-update-content"
					required
					rows={8}
					value={content}
					onChange={(event) => setContent(event.target.value)}
					placeholder="Write your park news, travel guide, or safari tips..."
					className={formInputClasses}
				/>
			</div>

			<div>
				<AuthFieldLabel htmlFor="ranthambhore-update-image">
					Cover Image
				</AuthFieldLabel>
				<input
					id="ranthambhore-update-image"
					type="file"
					accept="image/*"
					onChange={handleImageChange}
					className="block w-full font-body text-sm text-charcoal-700 file:mr-4 file:rounded-full file:border-0 file:bg-forest-500 file:px-4 file:py-2 file:font-display file:text-xs file:uppercase file:text-sand-50 hover:file:bg-forest-600"
				/>
				{imagePreviewUrl && (
					<div className="mt-3 flex items-start gap-4">
						<img
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
							: "Unable to publish highlight. Please try again."}
				</p>
			)}

			<Button type="submit" className="w-full" loading={mutation.isPending}>
				Publish Highlight
			</Button>
		</form>
	);
}
