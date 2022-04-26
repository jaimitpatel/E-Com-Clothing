const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }
    type Category {
        _id: ID
        name: String
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        username: String
        email: String
        order: [Order]
    }
    type Product {
        _id: String
        name: [String]
        desc: String
        img: String
        category: Category
        size: [Array]
        color: [Array]
        price: Float
        quantity: Boolean
    }
    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        addUser(
            firstName: String!
            lastName: String!
            email: String!
            password: String!
        ): Auth
        addOrder(products: [ID]!): Order
        updateUser(
            firstName: String
            lastName: String
            email: String
            password: String
        ): User
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
