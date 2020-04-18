import { GraphQLServerLambda, Options } from 'graphql-yoga';

import schema from './schema';

const options: Options = {
  endpoint: '/graphql',
  playground: '/playground',
  defaultPlaygroundQuery: 'query { serverTime }'
};

const lambda = new GraphQLServerLambda({
  schema,
  options
});

const server = lambda.graphqlHandler;
const playground = lambda.playgroundHandler;

export { server, playground };