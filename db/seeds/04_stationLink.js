/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('station_path_links').del()
  await knex('station_path_links').insert([
    {station_id: 7, linked_id: 27},
    {station_id: 9, linked_id:  14},
    {station_id: 14, linked_id: 9},
    {station_id: 24, linked_id: 13},
    {station_id: 13, linked_id: 24},
    {station_id: 27, linked_id: 7},
  ]);
};
