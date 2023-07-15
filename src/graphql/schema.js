import { makeExecutableSchema } from "@graphql-tools/schema";
import metrosModule from "../modules/metros/_index.js";
import pathLinkModule from "../modules/pathLink/_index.js";
import pathsModule from "../modules/paths/_index.js";
import stationsModule from "../modules/stations/_index.js";
import stationsLinkModule from "../modules/stationsLink/_index.js";

const typdefsArr = [
  metrosModule.typeDefs,
  pathLinkModule.typeDefs,
  pathsModule.typeDefs,
  stationsModule.typeDefs,
  stationsLinkModule.typeDefs,
];
const resolversArr = [
  metrosModule.resolvers,
  pathsModule.resolvers,
  stationsLinkModule.resolvers,
  stationsModule.resolvers,
  pathLinkModule.resolvers,
];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
