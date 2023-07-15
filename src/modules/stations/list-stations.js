import db from "../../db/index.js";

export const listStations = (filter = {}) => {
  return db("station").where(filter).select("*");
};
