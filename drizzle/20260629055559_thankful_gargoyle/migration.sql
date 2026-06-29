ALTER TABLE "blog_post" ALTER COLUMN "type" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "type" DROP DEFAULT;--> statement-breakpoint
DROP TYPE "blog_post_type";--> statement-breakpoint
CREATE TYPE "blog_post_type" AS ENUM('daily_update', 'ranthambhore_update');--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "type" SET DATA TYPE "blog_post_type" USING "type"::"blog_post_type";--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "type" SET DEFAULT 'ranthambhore_update'::"blog_post_type";