/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("path_links", (table) => {
    table.integer("path_id").references("id").inTable("paths").notNullable();
    table.integer("linked_id").references("id").inTable("paths").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("path_links");
};
