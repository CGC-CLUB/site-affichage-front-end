export type Post = {
  id: number;
  user: User;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  validated: boolean;
  department: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  validated: boolean;
};

export type Department = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
