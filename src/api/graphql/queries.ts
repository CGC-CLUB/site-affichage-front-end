import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      content
      updatedAt
      createdAt
      author {
        id
        first_name
      }
    }
  }
`;

export type GetPostsType = {
  posts: {
    id: string;
    content: string;
    updatedAt: string;
    createdAt: string;
    author: {
      id: string;
      first_name: string;
    };
  }[];
};

export const GET_POSTS_FOR_DASHBOARD = gql`
  query GetPostsForDashboard {
    posts {
      id
      content
      updatedAt
      createdAt
      validated
      author {
        id
        first_name
        family_name
      }
    }
  }
`;

export type GetPostsForDashboardType = {
  posts: {
    id: string;
    content: string;
    updatedAt: string;
    createdAt: string;
    validated: boolean;
    author: {
      id: string;
      first_name: string;
      family_name: string;
    };
  }[];
};

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      first_name
      family_name
      email
    }
  }
`;

export type GetUsersType = {
  users: {
    id: string;
    first_name: string;
    family_name: string;
    email: string;
  }[];
};

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      name
    }
  }
`;

export type GetDepartmentsType = {
  departments: {
    id: string;
    name: string;
  }[];
};
