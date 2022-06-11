import { ApolloServer } from 'apollo-server'
import definitions from './graphql/definitions'
import resolvers from './graphql/resolvers'
import DynamoDB from './config/aws'

const server:ApolloServer = new ApolloServer({ typeDefs: definitions, resolvers, csrfPrevention: true });

server.listen().then(({url}) => console.log(`Server is running on ${url}`))

// DynamoDB.addProject({
//   title: 'Counter Disinformation',
//   desc: 'Provides clarity about all the commercial deeds, political parties and individuals',
//   cover: '/home/pulsar/server-workload/Screenshot from 2022-05-26 15-13-07.png',
//   assets: ['/home/pulsar/server-workload/Screenshot from 2022-05-26 15-13-07.png'],
//   tech: ['Node.js', 'Neo4J', 'PostgreSQL', 'Socket.io', 'Docker', 'AWS', 'React', 'Redux']
// })