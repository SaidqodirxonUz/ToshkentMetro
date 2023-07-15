import { readFileSync } from "fs";
import { join } from "path";
import { listStations } from "./list-stations.js";
import { showStation } from "./show-station.js";
import { addStation } from "./add-station.js";
import { editStation } from "./edit-station.js";
import { removeStation } from "./remove-station.js";
import { listStationsLink } from "../stationsLink/list-stationsLink.js";
import { showPath } from "../paths/show-path.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "stations", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    stations: () => {
      return listStations();
    },
    station: (_, args) => {
      return showStation({ id: args.id });
    },
  },

  Mutation: {
    createStation: (_, args) => {
      return addStation(args.input);
    },
    updateStation: (_, args) => {
      return editStation({ id: args.id, ...args.input });
    },
    removeStation: (_, args) => {
      return removeStation({ id: args.id });
    },
  },
  Station: {
    path: (parent) => {
      return showPath({id: parent.path_id})
    },
    forward: (parent) => {
      return showStation({id: parent.forward_id})
    },
    backward: (parent) => {
      return showStation({id: parent.backward_id})
    },
    links: (parent) => {
      return listStationsLink({station_id: parent.id})
    }
  }
};

export default { typeDefs, resolvers };
