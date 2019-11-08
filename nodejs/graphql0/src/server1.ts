const express = require('express');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');
const session = require('express-session');

var mainSchema = graphql.buildSchema(`
  type Query {
    hello: String
  }
`);

const app = express();
app.use(session({ 
  secret: 'ad596d638befc9688e34b2be84981c9c1ba87e73', 
  cookie: { maxAge: 60000 }, 
  resave: false,
  saveUninitialized: true 
}));

const extensions = ({
  document,
  variables,
  operationName,
  result,
  context,
}) => {
  return {
    runTime: Date.now() - context.startTime,
  };
};

app.use(
  '/gqlapi',
  graphqlHTTP({
    schema: mainSchema,
    context: { startTime: Date.now() },
    graphiql: true,
    extensions,
  }),
);

app.listen(4000);
