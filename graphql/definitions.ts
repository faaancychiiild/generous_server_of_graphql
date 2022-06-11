import { gql } from 'apollo-server-express'

const definitions = gql`
  type Query {
    projects: [Project!]!
  }

  type Project {
    title: String,
    cover: String,
    desc: String,
    assets: [String]!,
    tech: [String]!
  }
`


export default definitions