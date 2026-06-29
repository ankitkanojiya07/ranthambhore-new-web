CREATE TYPE "blog_post_type" AS ENUM('daily_update', 'ranthambhor_update');--> statement-breakpoint
ALTER TABLE "blog_post" ADD COLUMN "type" "blog_post_type" DEFAULT 'ranthambhor_update'::"blog_post_type" NOT NULL;--> statement-breakpoint
CREATE INDEX "blog_post_type_idx" ON "blog_post" ("type");