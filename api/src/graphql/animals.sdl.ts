export const schema = gql`
  type Animal {
    id: String!
    name: String!
    size: String!
    age: Int!
    color: String!
    gender: Gender
    gender_id: String
    specie: String!
    photo_url: String
    keeper: Keeper
    keeper_id: String
  }

  type Query {
    animals: [Animal!]! @requireAuth
    animal(id: String!): Animal @requireAuth
  }

  input CreateAnimalInput {
    name: String!
    size: String!
    age: Int!
    color: String!
    gender_id: String
    specie: String!
    photo_url: String
    keeper_id: String
  }

  input UpdateAnimalInput {
    name: String
    size: String
    age: Int
    color: String
    gender_id: String
    specie: String
    photo_url: String
    keeper_id: String
  }

  type Mutation {
    createAnimal(input: CreateAnimalInput!): Animal! @requireAuth
    updateAnimal(id: String!, input: UpdateAnimalInput!): Animal! @requireAuth
    deleteAnimal(id: String!): Animal! @requireAuth
  }
`
