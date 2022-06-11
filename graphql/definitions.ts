import { gql } from 'apollo-server-express'

const definitions = gql`
  type Query {
    projects: [Project!]!
  }

  type Project {
    title: String,
    cover: String,
    desc: String,
    assets: [Image!]!,
    tech: [Tech!]!
  }

  type Image {
    src: String!
  }

  type Tech {
    stack: [String!]!
  }
`


export default definitions