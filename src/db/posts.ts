// this file is only for testing purposes and does not included in the final version

import { Post } from "@/types";
import { users } from "./users";

export const posts: Post[] = [
  {
    id: 1,
    user: users[0],
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
  {
    id: 2,
    user: users[1],
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
  {
    id: 3,
    user: users[2],
    content: "this is fake content",
    createdAt: new Date(),
    updatedAt: new Date(),
    validated: true,
    department: "IT",
  },
];
