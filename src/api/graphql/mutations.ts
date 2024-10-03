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

export type CreatePostType = {
  createPost: {
    id: string;
    content: string;
    validated: boolean;
  };
};

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

export type LoginType = {
  login: {
    first_name: string;
    family_name: string;
    email: string;
    id: string;
  };
};

export const VALIDATE_POST = gql`
  mutation validatePost($id: ID!) {
    validatePost(input: { id: $id }) {
      id
      validated
    }
  }
`;

export type ValidatePostType = {
  validatePost: {
    id: string;
    validated: boolean;
  };
};

export const INVALIDATE_POST = gql`
  mutation invalidatePost($id: ID!) {
    invalidatePost(input: { id: $id }) {
      id
      validated
    }
  }
`;

export type InvalidatePostType = {
  invalidatePost: {
    id: string;
    validated: boolean;
  };
};

export const CREATE_NEW_USER = gql`
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

export type CreateNewUserType = {
  createUser: {
    id: string;
    first_name: string;
    family_name: string;
    email: string;
    validated: boolean;
  };
};
