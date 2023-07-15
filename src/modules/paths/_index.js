import { readFileSync } from "fs";
import { join } from "path";
import { showPath } from "./show-path.js";
import { addPath } from "./add-path.js";
import { editPath } from "./edit-path.js";
import { removePath } from "./remove-path.js";
import { listPaths } from "./list-paths.js";
import { listStations } from "../stations/list-stations.js";
import { listPathsLink } from "../pathLink/list-pathsLink.js";
import { showMetro } from "../metros/show-metro.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "paths", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    paths: () => {
      return listPaths();
    },
    path: (_, args) => {
      return showPath({ id: args.id });
    },
  },

  Mutation: {
    createPath: (_, args) => {
      return addPath(args.input);
    },
    updatePath: (_, args) => {
      return editPath({ id: args.id, ...args.input });
    },
    removePath: (_, args) => {
      return removePath({ id: args.id });
    },
  },
  Path: {
    metro: (parent) => {
      return showMetro({ id: parent.metro_id });
    },
    stations: (parent) => {
      return listStations({ path_id: parent.path_id });
    },
    links: (parent) => {
      return listPathsLink({ path_id: parent.path_id });
    },
  },
};

export default { typeDefs, resolvers };
