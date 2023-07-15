import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showMetro = async ({ id }) => {
  const result = db("metros").where({ id }).first();

  if (!result) throw new NotFoundError("Metro not found");

  return result;
};
