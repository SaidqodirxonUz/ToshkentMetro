/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("paths").del();
  await knex("paths").insert([
    { name: "Chilonzor", metro_id: 1 },
    { name: "Yunusobod", metro_id: 1 },
    { name: "O'zbekiston", metro_id: 1 },
  ]);
};
