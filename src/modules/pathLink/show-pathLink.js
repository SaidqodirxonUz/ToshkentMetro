import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showPathLink = async ({ id }) => {
  const result = await db("path_links").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Path Link not found");
  }

  return result;
};
