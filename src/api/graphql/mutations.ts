import { gql } from "@apollo/client";

export const CREATE_POST = gql`
  mutation createPost($content: String!) {
    createPost(input:{content: $content}) {
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
