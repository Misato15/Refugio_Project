export const schema = gql`
  type Keeper {
    id: String!
    name: String!
    age: Int!
    gender: String!
    animal: [Animal]!
  }

  type Query {
    keepers: [Keeper!]! @requireAuth
    keeper(id: String!): Keeper @requireAuth
  }

  input CreateKeeperInput {
    name: String!
    age: Int!
    gender: String!
  }

  input UpdateKeeperInput {
    name: String
    age: Int
    gender: String
  }

  type Mutation {
    createKeeper(input: CreateKeeperInput!): Keeper! @requireAuth
    updateKeeper(id: String!, input: UpdateKeeperInput!): Keeper! @requireAuth
    deleteKeeper(id: String!): Keeper! @requireAuth
  }
`
