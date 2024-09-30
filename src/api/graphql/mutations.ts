import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(input: { content: $content }) {
      id
      content
      validated
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
