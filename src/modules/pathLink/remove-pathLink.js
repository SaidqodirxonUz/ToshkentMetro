import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removePathLink = async ({ id }) => {
  const result = await db("path_links").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Path Link not found");
  }

  return (await db("path_links").where({ id }).delete().returning("*"))[0];
};
