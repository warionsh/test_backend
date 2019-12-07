const { Actor, data } = require("./Actor.js");
const { gql } = require('apollo-server');

const typeDefs = gql(`
    type Actor {
        id: String
        name: String
        description: String
    }
    
    type Query {
        actor(id: Int): Actor
        actors: [Actor]
    }
`);

const resolvers = {
    Query: {
        actor: (parent, args) => {
            return data[args.id];
        },
        actors: () => {
            return data;
        }
    },

};

module.exports = { typeDefs, resolvers };