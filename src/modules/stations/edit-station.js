import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editStation = async ({ id, ...payload }) => {
  const result = await db("station").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Station not found");
  }

  return (await db("station").where({ id }).update(payload).returning("*"))[0];
};
