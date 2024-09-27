// this file is only for testing purposes and does not included in the final version

import { User } from "@/types";

export const users: User[] = [
  {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: false,
  },
  {
    id: 2,
    first_name: "Jane",
    last_name: "Doe",
    email: "jane@example.com",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
  },
  {
    id: 3,
    first_name: "Bob",
    last_name: "Doe",
    email: "bob@example.com",
    password: "password",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: false,
  },
];
