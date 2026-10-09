ALTER TABLE "blog_post"
	ADD COLUMN IF NOT EXISTS "submitter_name" text,
	ADD COLUMN IF NOT EXISTS "submitter_email" text;