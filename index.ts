import { ApolloServer } from 'apollo-server'
import definitions from './graphql/definitions'
import resolvers from './graphql/resolvers'
import DynamoDB from './config/aws/index'

const server:ApolloServer = new ApolloServer({ typeDefs: definitions, resolvers, csrfPrevention: true });

server.listen().then(({url}) => console.log(`Server is running on ${url}`))

const foo = async () => {
  console.log(await DynamoDB.getProjects());
}

foo()
