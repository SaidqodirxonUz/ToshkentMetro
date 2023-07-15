import db from "../../db/index.js";

export const addMetro = async (payload) => {
  const result = await db("metros")
    .insert(payload)
    .returning("*");

  return result[0];
};
