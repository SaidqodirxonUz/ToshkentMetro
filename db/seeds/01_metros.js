/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("metros").del();
  await knex("metros").insert([
    { name: "Tashkent" },
  ]);
};
