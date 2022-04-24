import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($password: String!, $email: String!) {
    addUser(password: $password, email: $email) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        price
        description        
        category {
          name
        }
      }
    }
  }
`;