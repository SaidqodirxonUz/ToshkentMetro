import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editPath = async ({ id, ...payload }) => {
  const result = await db("paths").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Path not found");
  }

  return (
    await db("paths").where({ id }).update(payload).returning("*")
  )[0];
};
