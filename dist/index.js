"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = tslib_1.__importDefault(require("./schema"));
const options = {
    endpoint: '/graphql',
    playground: '/playground',
    defaultPlaygroundQuery: 'query { serverTime }'
};
const lambda = new graphql_yoga_1.GraphQLServerLambda({
    schema: schema_1.default,
    options
});
const server = lambda.graphqlHandler;
exports.server = server;
const playground = lambda.playgroundHandler;
exports.playground = playground;
