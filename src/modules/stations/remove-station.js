import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const removeStation = async ({ id }) => {
  const result = await db("stations").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Station not found");
  }

  return (await db("stations").where({ id }).delete().returning("*"))[0];
};
