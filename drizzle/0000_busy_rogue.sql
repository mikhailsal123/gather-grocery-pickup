CREATE TABLE `carts` (
	`id` text PRIMARY KEY NOT NULL,
	`owner` text NOT NULL,
	`store` text NOT NULL,
	`share` text,
	`status` text DEFAULT 'open' NOT NULL,
	`revision` integer DEFAULT 0 NOT NULL,
	FOREIGN KEY (`owner`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `carts_share_unique` ON `carts` (`share`);--> statement-breakpoint
CREATE INDEX `idx_carts_owner` ON `carts` (`owner`);--> statement-breakpoint
CREATE TABLE `items` (
	`cart` text NOT NULL,
	`product` text NOT NULL,
	`quantity` integer NOT NULL,
	PRIMARY KEY(`cart`, `product`),
	FOREIGN KEY (`cart`) REFERENCES `carts`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `members` (
	`cart` text NOT NULL,
	`user` text NOT NULL,
	PRIMARY KEY(`cart`, `user`),
	FOREIGN KEY (`cart`) REFERENCES `carts`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`user`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `idx_members_user` ON `members` (`user`);--> statement-breakpoint
CREATE TABLE `orders` (
	`id` text PRIMARY KEY NOT NULL,
	`cart` text NOT NULL,
	`owner` text NOT NULL,
	`store` text NOT NULL,
	`status` text DEFAULT 'confirmed' NOT NULL,
	`created` integer NOT NULL,
	`pickup` text NOT NULL,
	`person` text NOT NULL,
	`payment` text NOT NULL,
	`subtotal` integer NOT NULL,
	`fee` integer NOT NULL,
	`tax` integer NOT NULL,
	`lines` text NOT NULL,
	FOREIGN KEY (`cart`) REFERENCES `carts`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owner`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `orders_cart_unique` ON `orders` (`cart`);--> statement-breakpoint
CREATE INDEX `idx_orders_owner` ON `orders` (`owner`);--> statement-breakpoint
CREATE INDEX `idx_orders_store` ON `orders` (`store`);--> statement-breakpoint
CREATE TABLE `reviews` (
	`id` text PRIMARY KEY NOT NULL,
	`order_id` text NOT NULL,
	`owner` text NOT NULL,
	`store` text NOT NULL,
	`rating` integer NOT NULL,
	`comment` text NOT NULL,
	`created` integer NOT NULL,
	FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owner`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `reviews_order_id_unique` ON `reviews` (`order_id`);--> statement-breakpoint
CREATE INDEX `idx_reviews_store` ON `reviews` (`store`);--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `stock` (
	`store` text NOT NULL,
	`product` text NOT NULL,
	`available` integer NOT NULL,
	PRIMARY KEY(`store`, `product`)
);
--> statement-breakpoint
CREATE TABLE `store_edits` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`address` text NOT NULL,
	`hours` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`password` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`address` text DEFAULT '' NOT NULL,
	`payment` text DEFAULT 'test-visa' NOT NULL,
	`role` text DEFAULT 'customer' NOT NULL,
	`store` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);