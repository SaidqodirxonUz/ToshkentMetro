import db from "../../db/index.js";

export const listPathsLink = (filter = {}) => {
  return db("path_links").where(filter).select("*");
};
