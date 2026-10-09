ALTER TABLE "blog_post"
	ADD COLUMN IF NOT EXISTS "approval_token_hash" text,
	ADD COLUMN IF NOT EXISTS "approval_token_expires_at" timestamp;
