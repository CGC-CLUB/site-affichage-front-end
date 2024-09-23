// this file is only for testing purposes and does not included in the final version

import { Post } from "@/types";

export const posts: Post[] = [
  {
    id: 1,
    user: {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
  {
    id: 2,
    user: {
      id: 2,
      first_name: "Jane",
      last_name: "Doe",
      email: "jane@example.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
  {
    id: 3,
    user: {
      id: 3,
      first_name: "Bob",
      last_name: "Doe",
      email: "bob@example.com",
      password: "password",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
];
