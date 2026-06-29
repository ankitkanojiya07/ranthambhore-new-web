ALTER TABLE "blog_post" ADD COLUMN "spotted_date" date;--> statement-breakpoint
CREATE INDEX "blog_post_spottedDate_idx" ON "blog_post" ("spotted_date");