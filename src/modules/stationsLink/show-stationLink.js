import db from "../../db/index.js";
import { NotFoundError } from "../../shared/errors/index.js";

export const showStationLink = async ({ id }) => {
  const station = await db("station_path_links").where({ id }).first();

  if (!station) {
    throw new NotFoundError("Station Link not found");
  }

  return station;
};
