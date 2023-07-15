/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const stations = [
  {
    // id: 1,
    name: "Olmazor",
    path_id: 1,
    forward_id: 2,
    backward_id: null,
    has_path_link: false,
  },
  {
    // id: 2,
    name: "Chilonzor",
    path_id: 1,
    forward_id: 3,
    backward_id: 1,
    has_path_link: false,
  },
  {
    // id: 3,
    name: "Mirzo Ulug'bek",
    path_id: 1,
    forward_id: 4,
    backward_id: 2,
    has_path_link: false,
  },
  {
    // id: 4,
    name: "Novza",
    path_id: 1,
    forward_id: 5,
    backward_id: 3,
    has_path_link: false,
  },
  {
    // id: 5,
    name: "Milliy Bo'g",
    path_id: 1,
    forward_id: 6,
    backward_id: 4,
    has_path_link: false,
  },
  {
    // id: 6,
    name: "Xalqlar Do'tligi",
    path_id: 1,
    forward_id: 7,
    backward_id: 5,
    has_path_link: false,
  },
  {
    // id: 7,
    name: "Paxtakor",
    path_id: 1,
    forward_id: 8,
    backward_id: 6,
    has_path_link: true,
  },
  {
    // id: 8,
    name: "Mustaqillik Maydoni",
    path_id: 1,
    forward_id: 9,
    backward_id: 7,
    has_path_link: false,
  },
  {
    // id: 9,
    name: "Amir Temur Xiyoboni",
    path_id: 1,
    forward_id: 10,
    backward_id: 8,
    has_path_link: true,
  },
  {
    // id: 10,
    name: "Hamid Olimjon",
    path_id: 1,
    forward_id: 11,
    backward_id: 9,
    has_path_link: false,
  },
  {
    // id: 11,
    name: "Pushkin",
    path_id: 1,
    forward_id: 12,
    backward_id: 10,
    has_path_link: false,
  },
  {
    // id: 12,
    name: "Buyuk Ipak Yo'li",
    path_id: 1,
    forward_id: 13,
    backward_id: 11,
    has_path_link: false,
  },
  {
    // id: 13,
    name: "Ming O'rik",
    path_id: 2,
    forward_id: 2,
    backward_id: null,
    has_path_link: true,
  },
  {
    // id: 14,
    name: "Yunus Rajabiy",
    path_id: 2,
    forward_id: 3,
    backward_id: 1,
    has_path_link: true,
  },
  {
    // id: 15,
    name: "Abdulla Qodiriy",
    path_id: 2,
    forward_id: 4,
    backward_id: 2,
    has_path_link: false,
  },
  {
    // id: 16,
    name: "Minor",
    path_id: 2,
    forward_id: 5,
    backward_id: 3,
    has_path_link: false,
  },
  {
    // id: 17,
    name: "Bodomzor",
    path_id: 2,
    forward_id: 6,
    backward_id: 4,
    has_path_link: false,
  },
  {
    // id: 18,
    name: "Shahriston",
    path_id: 2,
    forward_id: 7,
    backward_id: 5,
    has_path_link: false,
  },
  {
    // id: 19,
    name: "Yunusobod",
    path_id: 2,
    forward_id: 8,
    backward_id: 6,
    has_path_link: false,
  },
  {
    // id: 20,
    name: "Turkiston",
    path_id: 2,
    forward_id: 9,
    backward_id: 7,
    has_path_link: false,
  },
  {
    // id: 21,
    name: "Do'stlik",
    path_id: 3,
    forward_id: 2,
    backward_id: null,
    has_path_link: false,
  },
  {
    // id: 22,
    name: "Mashinasozlar",
    path_id: 3,
    forward_id: 3,
    backward_id: 1,
    has_path_link: false,
  },
  {
    // id: 23,
    name: "Toshkent",
    path_id: 3,
    forward_id: 4,
    backward_id: 2,
    has_path_link: false,
  },
  {
    // id: 24,
    name: "Oybek",
    path_id: 3,
    forward_id: 5,
    backward_id: 3,
    has_path_link: true,
  },
  {
    // id: 25,
    name: "Kosmonavtlar",
    path_id: 3,
    forward_id: 6,
    backward_id: 4,
    has_path_link: false,
  },
  {
    // id: 26,
    name: "O'zbekiston",
    path_id: 3,
    forward_id: 7,
    backward_id: 5,
    has_path_link: false,
  },
  {
    // id: 27,
    name: "Alisher Navoiy",
    path_id: 3,
    forward_id: 8,
    backward_id: 6,
    has_path_link: true,
  },
  {
    // id: 28,
    name: "G'afur G'ulom",
    path_id: 3,
    forward_id: 9,
    backward_id: 7,
    has_path_link: false,
  },
  {
    // id: 29,
    name: "Chorsu",
    path_id: 3,
    forward_id: 10,
    backward_id: 8,
    has_path_link: false,
  },
  {
    // id: 30,
    name: "Tinchlik",
    path_id: 3,
    forward_id: 11,
    backward_id: 9,
    has_path_link: false,
  },
  {
    // id: 31,
    name: "Beruniy",
    path_id: 3,
    forward_id: 12,
    backward_id: 10,
    has_path_link: false,
  },
]
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("stations").del();
  // await knex("stations").insert();
  await Promise.all(stations.map(station => knex('stations').insert(station)))
};