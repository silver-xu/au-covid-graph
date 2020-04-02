import { ApolloServer as ApolloExpressServer } from 'apollo-server-express';

import express from 'express';
import serverless from 'serverless-http';

import { typeDefs } from './typeDefs/statsTypeDefs';
import { resolvers } from './resolvers/statsResolver';

const app = express();
const server = new ApolloExpressServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });
app.listen(
  { port: 4000 },
  () => !process.env['LAMBDA_ENV'] && console.log('🚀  Server ready at http://localhost:4000/graphql'),
);

export const handler = serverless(app);
