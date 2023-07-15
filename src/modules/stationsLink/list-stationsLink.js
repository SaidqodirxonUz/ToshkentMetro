import db from "../../db/index.js";

export const listStationsLink = (filter = {}) => {
  return db("station_path_links").where(filter).select("*");
};
