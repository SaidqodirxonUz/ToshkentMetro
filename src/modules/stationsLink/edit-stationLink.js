import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const editStationLink = async ({ id, ...payload }) => {
  const result = await db("station_path_links").where({ id }).first();

  if (!result) {
    throw new NotFoundError("Station Link not found");
  } 

  return (await db("station_path_links").where({ id }).update(payload).returning("*"))[0];
};
