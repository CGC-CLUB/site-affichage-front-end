import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetPosts($departmentId: ID) {
    posts(filter: { departmentId: $departmentId, validated: true }) {
      id
      content
      updatedAt
      createdAt
      author {
        id
        first_name
        role
      }
    }
  }
`;

export const GET_POSTS_FOR_DASHBOARD = gql`
  query GetPostsForDashboard($authorId: ID,$chefId: ID) {
    posts(filter: { authorId: $authorId,chefId:$chefId}) {
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

export const GET_USERS = gql`
  query GetUsers(
    $email: String
    $first_name: String
    $family_name: String
    $id: ID
  ) {
    users(
      filter: {
        email: $email
        first_name: $first_name
        family_name: $family_name
        id: $id
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

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      name
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      id
      first_name
      family_name
      email
      role
    }
  }
`;

export const GET_DEPARTMENT_FOR_DASHBOARD = gql`
  query GetDepartmentForDashboard {
    departments {
      chef {
        first_name
        id
      }
      id
      name
    }
  }
`;
