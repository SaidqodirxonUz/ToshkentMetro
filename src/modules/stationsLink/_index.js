import { readFileSync } from "fs";
import { join } from "path";
import { listStationsLink } from "./list-stationsLink.js";
import { showStationLink } from "./show-stationLink.js";
import { addStationLink } from "./add-stationLink.js";
import { editStationLink } from "./edit-stationLink.js";
import { removeStationLink } from "./remove-stationLink.js";
import { showStation } from "../stations/show-station.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "stationsLink", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    stationLinks: () => {
      return listStationsLink();
    },
    stationLink: (_, args) => {
      return showStationLink({ id: args.id });
    },
  },

  Mutation: {
    createStationLink: (_, args) => {
      return addStationLink(args.input);
    },
    updateStationLink: (_, args) => {
      return editStationLink({ id: args.id, ...args.input });
    },
    removeStationLink: (_, args) => {
      return removeStationLink({ id: args.id });
    },
  },
  StationLink: {
    station: (parent) => {
      return showStation({id: parent.station})
    },
    linked_station: (parent) => {
      return showStation({id: parent.station})
    }
  }
};

export default { typeDefs, resolvers };
