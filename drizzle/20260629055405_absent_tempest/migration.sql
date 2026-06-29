CREATE TABLE "blog_zone" (
	"id" text PRIMARY KEY,
	"number" integer NOT NULL UNIQUE,
	"name" text NOT NULL,
	"slug" text NOT NULL UNIQUE,
	"safari_type" text,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "blog_post" ADD COLUMN "zone_id" text;--> statement-breakpoint
CREATE INDEX "blog_post_zoneId_idx" ON "blog_post" ("zone_id");--> statement-breakpoint
CREATE INDEX "blog_zone_number_idx" ON "blog_zone" ("number");--> statement-breakpoint
CREATE INDEX "blog_zone_slug_idx" ON "blog_zone" ("slug");--> statement-breakpoint
ALTER TABLE "blog_post" ADD CONSTRAINT "blog_post_zone_id_blog_zone_id_fkey" FOREIGN KEY ("zone_id") REFERENCES "blog_zone"("id") ON DELETE SET NULL;