import db from "../../db/index.js";

export const addPath = async (payload) => {
  const result = await db("paths").insert(payload).returning("*");

  return result[0];
};
