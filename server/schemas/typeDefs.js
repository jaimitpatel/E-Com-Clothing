const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  order(_id: ID!): Order
}
  type User {
    _id: ID
    username: String
    email: String
    order: [Order]
  }
  type Product {
    _id: String
    name: [String]
    desc: String
    img: String
    categories: [Array]
    size: [Array]
    color: [Array]
    price: Number
    quantity: Boolean
  }
  type {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    updateProduct(_id: ID!, quantity: Bool!): Product
  }
`;

module.exports = typeDefs;
