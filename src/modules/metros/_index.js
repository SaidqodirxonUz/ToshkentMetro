import { readFileSync } from "fs";
import { join } from "path";
import { listMetros } from "./list-metros.js";
import { showMetro } from "./show-metro.js";
import { addMetro } from "./add-metro.js";
import { editMetro } from "./edit-metro.js";
import { removeMetro } from "./remove-metro.js";
import { listPaths } from "../paths/list-paths.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "metros", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    metros: () => {
      return listMetros();
    },
    metro: (_, args) => {
      return showMetro({ id: args.id });
    },
  },

  Mutation: {
    createMetro: (_, args) => {
      return addMetro(args.input);
    },
    updateMetro: (_, args) => {
      return editMetro({ id: args.id, ...args.input });
    },
    removeMetro: (_, args) => {
      return removeMetro({ id: args.id });
    }
  },

  Metro:{
    paths: (parent) => {
      return listPaths({metro_id: parent.id})
    }
  }
};

export default { typeDefs, resolvers };
