//const { graphql } = require("graphql");

const { ApolloServer, gql } = require("apollo-server");



const typeDefs = gql`
    type SkiDay{
        id: ID!
        date: String!
        mountaine: String!
        conditions: Conditions
    }
    type Query{
        totalDays: Int!,
        allDays: [SkiDay!]!
    }

    enum Conditions {
        POWER
        HEAVY
        ICE
        THIN


    }
`;

const resolvers = {

}

const server = new ApolloServer({
    typeDefs,
    mocks: true
})
server
    .listen().
    then(({url}) => console.log(`Server running at ${url}`))