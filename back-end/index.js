const {users} = require('./db.js')
const express = require('express')
const graphqlHTTP = require('express-graphql')
let {buildSchema} = require('graphql')

let schema = buildSchema(`
    type Query {
        hello: String
        users: [User!]!
        user(id = ID!): User!
    }
    type User {
        id: ID!
        name: String!
    }
`)

let root = {
    hello: () => {
        return 'Hello World!'
    },
    users: (parent, args, context, info) => {
        return users
    }
}

let server = express();
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))
server.listen(4000)
console.log('Running GraphQL API on localhost:4000/graphql')