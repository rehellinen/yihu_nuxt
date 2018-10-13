/**
 *  graphql.js
 *  Create By rehellinen
 *  Create On 2018/10/13 16:16
 */
import {ApolloServer, gql} from 'apollo-server-koa'
import {schema, resolvers} from "../libs/graphql"

export const graphql = (app) => {
  const typeDefs = gql(schema)
  const server = new ApolloServer({ typeDefs, resolvers })
  server.applyMiddleware({ app })
}
