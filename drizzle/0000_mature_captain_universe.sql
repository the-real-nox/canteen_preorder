CREATE TABLE "canteen_obj" (
	"id" serial PRIMARY KEY NOT NULL,
	"display_name" varchar NOT NULL,
	"price" double precision NOT NULL,
	"image" text,
	CONSTRAINT "canteen_obj_display_name_unique" UNIQUE("display_name")
);
--> statement-breakpoint
CREATE TABLE "order_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"canteen_obj_id" integer NOT NULL,
	"order_id" integer NOT NULL,
	"amount" integer DEFAULT 1,
	CONSTRAINT "amount_check" CHECK ("order_item"."amount" >= 1)
);
--> statement-breakpoint
CREATE TABLE "canteen_obj_user" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer PRIMARY KEY NOT NULL,
	"ordered_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "role" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	CONSTRAINT "role_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"role_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_canteen_obj_id_canteen_obj_id_fk" FOREIGN KEY ("canteen_obj_id") REFERENCES "public"."canteen_obj"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_item" ADD CONSTRAINT "order_item_order_id_canteen_obj_user_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."canteen_obj_user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "canteen_obj_user" ADD CONSTRAINT "canteen_obj_user_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_role_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."role"("id") ON DELETE no action ON UPDATE no action;