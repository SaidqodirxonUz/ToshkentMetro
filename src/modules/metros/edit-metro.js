import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editMetro = async ({ id, ...payload }) => {
  const metro = await db("metros").where({ id }).first();

  if (!metro) throw new NotFoundError("Metros not found");

  return (await db("metros").where({ id }).update(payload).returning("*"))[0];
};
