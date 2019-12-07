
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');


const { typeDefs, resolvers } = require("./schema.js");
const { Actor, data } = require("./Actor.js");


var app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        {
            serverWillStart() {
                console.log('Server starting up!');
            }
        }
    ]
});

server.applyMiddleware({ app });

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Server up');
});

var port = '8080';
app.set('port', port);


app.listen(port);
console.log('Listening on ' + port + ", graphql enable on /graphql");
