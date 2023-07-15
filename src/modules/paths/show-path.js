import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showPath = async ({ id }) => {
  const item = await db("paths").where({ id }).first();

  if (!item) {
    throw new NotFoundError("Path not found");
  }

  return item;
};
