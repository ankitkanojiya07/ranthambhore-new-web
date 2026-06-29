ALTER TABLE "blog_post" DROP CONSTRAINT "blog_post_category_id_blog_category_id_fkey";--> statement-breakpoint
ALTER TABLE "blog_post_tag" DROP CONSTRAINT "blog_post_tag_post_id_blog_post_id_fkey";--> statement-breakpoint
ALTER TABLE "blog_post_tag" DROP CONSTRAINT "blog_post_tag_tag_id_blog_tag_id_fkey";--> statement-breakpoint
ALTER TABLE "blog_category" ALTER COLUMN "id" SET DATA TYPE uuid USING "id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_category" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "id" SET DATA TYPE uuid USING "id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "blog_post" ALTER COLUMN "category_id" SET DATA TYPE uuid USING "category_id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ALTER COLUMN "post_id" SET DATA TYPE uuid USING "post_id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ALTER COLUMN "tag_id" SET DATA TYPE uuid USING "tag_id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_tag" ALTER COLUMN "id" SET DATA TYPE uuid USING "id"::uuid;--> statement-breakpoint
ALTER TABLE "blog_tag" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_category_id_blog_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "blog_category"("id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ADD CONSTRAINT "blog_post_tag_post_id_blog_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "blog_post"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ADD CONSTRAINT "blog_post_tag_tag_id_blog_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "blog_tag"("id") ON DELETE CASCADE;
