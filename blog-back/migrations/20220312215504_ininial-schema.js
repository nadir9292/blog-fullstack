/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments()
    table.text("pseudo").notNullable()
    table.text("email").notNullable().unique()
    table.text("passwordHash").notNullable()
    table.text("passwordSalt").notNullable()
  })
  await knex.schema.createTable("posts", (table) => {
    table.increments()
    table.text("title").notNullable()
    table.text("content").notNullable()
    table.datetime("publication_date").defaultTo(knex.fn.now())
    table.boolean("is_published").notNullable()
    table.integer("userId").notNullable()
    table.foreign("userId").references("id").inTable("users")
  })
  await knex.schema.createTable("comments", (table) => {
    table.increments()
    table.text("content").notNullable()
    table.datetime("publication_date").defaultTo(knex.fn.now())
    table.boolean("is_published").notNullable()
    table.integer("userId").notNullable()
    table.integer("postId").notNullable()
    table.foreign("userId").references("id").inTable("users")
    table.foreign("postId").references("id").inTable("posts")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTable("comments")
  await knex.schema.dropTable("posts")
  await knex.schema.dropTable("users")
}
