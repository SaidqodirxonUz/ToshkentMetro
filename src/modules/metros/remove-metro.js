import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeMetro = async ({ id }) => {
  const result = await db("metros").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Metros not found");
  }

  return (await db("metros").where({ id }).delete().returning("*"))[0];
};
