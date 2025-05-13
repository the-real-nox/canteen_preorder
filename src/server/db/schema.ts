import { relations, sql } from "drizzle-orm";
import { doublePrecision, integer, pgTable, serial, timestamp, varchar, text, check } from "drizzle-orm/pg-core";

export const roleTable = pgTable("role", {
    id: serial().primaryKey(),
    name: varchar().unique(),
})

export const userTable = pgTable("user", {
    id: serial("id").primaryKey(),
    username: varchar("username").notNull(),
    email: varchar("email").notNull().unique(),
    password: varchar("password").notNull(),
    roleId: integer("role_id").notNull().references(() => roleTable.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const canteenObjTable = pgTable("canteen_obj", {
    id: serial("id").primaryKey(),
    displayName: varchar("display_name").notNull().unique(),
    price: doublePrecision("price").notNull(),
    image: text("image"), // base64-encoded string
})

export const orderTable = pgTable("order", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => userTable.id),
    orderedAt: timestamp("ordered_at").defaultNow(),
});

export const orderItemTable = pgTable(
    "order_item",
    {
        id: serial("id").primaryKey(),
        canteenObjId: integer("canteen_obj_id").notNull().references(() => canteenObjTable.id),
        orderId: integer("order_id").notNull().references(() => orderTable.id),
        amount: integer("amount").default(1)
    },
    (table) => [
        check("amount_check", sql`${table.amount} >= 1`)
    ]
);

export const userRelations = relations(userTable, ({ one }) => ({
    role: one(roleTable, {
        fields: [ userTable.roleId ],
        references: [ roleTable.id ],
    })  
}))

export const orderRelations = relations(orderTable, ({ one }) => ({
    user: one(userTable, {
        fields: [ orderTable.userId ],
        references: [ userTable.id ],
    })
}))

export const orderItemRelations = relations(orderItemTable, ({ one }) => ({
    canteenObj: one(canteenObjTable, {
        fields: [ orderItemTable.canteenObjId ],
        references: [ canteenObjTable.id ],
    }),
    order: one(orderTable, {
        fields: [ orderItemTable.orderId ],
        references: [ orderTable.id ],
    })
}))