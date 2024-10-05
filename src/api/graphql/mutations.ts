import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($content: String!, $department: String!) {
    createPost(input: { content: $content, departmentId: $department }) {
      content
      id
      validated
      author {
        family_name
      }
      createdAt
      department {
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      first_name
      family_name
      email
      id
    }
  }
`;

export const VALIDATE_POST = gql`
  mutation validatePost($id: ID!) {
    validatePost(input: { id: $id }) {
      id
      validated
    }
  }
`;

export const INVALIDATE_POST = gql`
  mutation invalidatePost($id: ID!) {
    invalidatePost(input: { id: $id }) {
      id
      validated
    }
  }
`;

export const CREATE_NEW_USER = gql`
  #graphql
  mutation CreateUser(
    $first_name: String!
    $family_name: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      input: {
        first_name: $first_name
        family_name: $family_name
        email: $email
        password: $password
        role: USER
      }
    ) {
      id
      first_name
      family_name
      email
      validated
    }
  }
`;

export const VALIDATE_USER = gql`
  mutation ValidateUser($id: ID!) {
    validateUser(input: { id: $id }) {
      id
    }
  }
`;

export const INVALIDATE_USER = gql`
  mutation InvalidateUser($id: ID!) {
    invalidateUser(input: { id: $id }) {
      id
    }
  }
`;
