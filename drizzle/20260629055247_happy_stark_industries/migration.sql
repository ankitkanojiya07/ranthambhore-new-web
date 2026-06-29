CREATE TYPE "blog_post_status" AS ENUM('draft', 'published', 'archived');--> statement-breakpoint
CREATE TABLE "blog_category" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_post" (
	"id" text PRIMARY KEY,
	"title" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"excerpt" text,
	"content" text NOT NULL,
	"cover_image" text,
	"status" "blog_post_status" DEFAULT 'draft'::"blog_post_status" NOT NULL,
	"published_at" timestamp,
	"meta_title" text,
	"meta_description" text,
	"author_id" text,
	"category_id" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blog_post_tag" (
	"post_id" text,
	"tag_id" text,
	CONSTRAINT "blog_post_tag_pkey" PRIMARY KEY("post_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "blog_tag" (
	"id" text PRIMARY KEY,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE INDEX "blog_category_slug_idx" ON "blog_category" ("slug");--> statement-breakpoint
CREATE INDEX "blog_post_slug_idx" ON "blog_post" ("slug");--> statement-breakpoint
CREATE INDEX "blog_post_authorId_idx" ON "blog_post" ("author_id");--> statement-breakpoint
CREATE INDEX "blog_post_categoryId_idx" ON "blog_post" ("category_id");--> statement-breakpoint
CREATE INDEX "blog_post_status_idx" ON "blog_post" ("status");--> statement-breakpoint
CREATE INDEX "blog_post_publishedAt_idx" ON "blog_post" ("published_at");--> statement-breakpoint
CREATE INDEX "blog_post_tag_postId_idx" ON "blog_post_tag" ("post_id");--> statement-breakpoint
CREATE INDEX "blog_post_tag_tagId_idx" ON "blog_post_tag" ("tag_id");--> statement-breakpoint
CREATE INDEX "blog_tag_slug_idx" ON "blog_tag" ("slug");--> statement-breakpoint
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_author_id_user_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_category_id_blog_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "blog_category"("id") ON DELETE SET NULL;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ADD CONSTRAINT "blog_post_tag_post_id_blog_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "blog_post"("id") ON DELETE CASCADE;--> statement-breakpoint
ALTER TABLE "blog_post_tag" ADD CONSTRAINT "blog_post_tag_tag_id_blog_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "blog_tag"("id") ON DELETE CASCADE;