import { readFileSync } from "fs";
import { join } from "path";
import { listPathsLink } from "./list-pathsLink.js";
import { showPathLink } from "./show-pathLink.js";
import { addPathLink } from "./add-pathLink.js";
import { editPathLink } from "./edit-pathLink.js";
import { removePathLink } from "./remove-pathLink.js";
import { showPath } from "../paths/show-path.js";

const typeDefs = readFileSync(
  join(process.cwd(), "src", "modules", "pathLink", "_schema.gql"),
  "utf8"
);

const resolvers = {
  Query: {
    pathLinks: () => {
      return listPathsLink();
    },
    pathLink: (_, args) => {
      return showPathLink({ id: args.id });
    },
  },

  Mutation: {
    createPathLink: (_, args) => {
      return addPathLink(args.input);
    },
    updatePathLink: (_, args) => {
      return editPathLink({ id: args.id, ...args.input });
    },
    removePathLink: (_, args) => {
      return removePathLink({ id: args.id });
    },
  },
  PathLink: {
    path: (parent) => {
      return showPath({id: parent.path_id})
    },  
    linked_path: (parent) => {
      return showPath({id: parent.path_id})
    },  
  }
};

export default { typeDefs, resolvers };
