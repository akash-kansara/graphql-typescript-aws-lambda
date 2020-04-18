"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_tools_1 = require("graphql-tools");
const type_1 = tslib_1.__importDefault(require("./type"));
const resolver_1 = tslib_1.__importDefault(require("./resolver"));
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs: type_1.default,
    resolvers: resolver_1.default,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
});
exports.default = schema;
