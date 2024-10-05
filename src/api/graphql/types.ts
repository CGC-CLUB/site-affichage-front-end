export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date; output: Date };
};

export type CreateDepartmentInput = {
  chef: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
};

export type CreatePostInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  departmentId: Scalars["String"]["input"];
  image?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateTvInput = {
  department: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type CreateUserInput = {
  email: Scalars["String"]["input"];
  family_name: Scalars["String"]["input"];
  first_name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  role: Role;
};

export type Department = {
  __typename?: "Department";
  TVs?: Maybe<Array<Maybe<Tv>>>;
  chef?: Maybe<User>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  posts?: Maybe<Array<Maybe<Post>>>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type LoginTvInput = {
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createDepartment?: Maybe<Department>;
  createPost?: Maybe<Post>;
  createTV?: Maybe<Tv>;
  createUser?: Maybe<User>;
  invalidatePost?: Maybe<Post>;
  invalidateUser?: Maybe<User>;
  login?: Maybe<User>;
  loginTv?: Maybe<Tv>;
  logout?: Maybe<Scalars["String"]["output"]>;
  validatePost?: Maybe<Post>;
  validateUser?: Maybe<User>;
};

export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationCreateTvArgs = {
  input: CreateTvInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationInvalidatePostArgs = {
  input: ValidatePostInput;
};

export type MutationInvalidateUserArgs = {
  input: ValidateUserInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationLoginTvArgs = {
  input: LoginTvInput;
};

export type MutationValidatePostArgs = {
  input: ValidatePostInput;
};

export type MutationValidateUserArgs = {
  input: ValidateUserInput;
};

export type Post = {
  __typename?: "Post";
  author?: Maybe<User>;
  content?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  department?: Maybe<Department>;
  id: Scalars["ID"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  validated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PostFilterInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  departmentId?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  validated?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  TV?: Maybe<Tv>;
  TVs?: Maybe<Array<Maybe<Tv>>>;
  department?: Maybe<Department>;
  departments?: Maybe<Array<Maybe<Department>>>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
};

export type QueryTvArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryDepartmentArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPostArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryPostsArgs = {
  filter?: InputMaybe<PostFilterInput>;
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilterInput>;
};

export enum Role {
  Admin = "ADMIN",
  Chef = "CHEF",
  User = "USER",
}

export type Tv = {
  __typename?: "TV";
  department?: Maybe<Department>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
};

export type User = {
  __typename?: "User";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  department?: Maybe<Department>;
  email?: Maybe<Scalars["String"]["output"]>;
  family_name?: Maybe<Scalars["String"]["output"]>;
  first_name?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  posts?: Maybe<Array<Maybe<Post>>>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  validated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UserFilterInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  family_name?: InputMaybe<Scalars["String"]["input"]>;
  first_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  role?: InputMaybe<Role>;
  validated?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ValidatePostInput = {
  id: Scalars["ID"]["input"];
};

export type ValidateUserInput = {
  id: Scalars["ID"]["input"];
};

export type CreatePostMutationVariables = Exact<{
  content: Scalars["String"]["input"];
  department: Scalars["String"]["input"];
}>;

export type CreatePostMutation = {
  __typename?: "Mutation";
  createPost?: {
    __typename?: "Post";
    content?: string | null;
    id: string;
    validated?: boolean | null;
    createdAt?: Date | null;
    author?: { __typename?: "User"; family_name?: string | null } | null;
    department?: { __typename?: "Department"; name?: string | null } | null;
  } | null;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?: {
    __typename?: "User";
    first_name?: string | null;
    family_name?: string | null;
    email?: string | null;
    id: string;
  } | null;
};

export type ValidatePostMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ValidatePostMutation = {
  __typename?: "Mutation";
  validatePost?: {
    __typename?: "Post";
    id: string;
    validated?: boolean | null;
  } | null;
};

export type InvalidatePostMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type InvalidatePostMutation = {
  __typename?: "Mutation";
  invalidatePost?: {
    __typename?: "Post";
    id: string;
    validated?: boolean | null;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  first_name: Scalars["String"]["input"];
  family_name: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type CreateUserMutation = {
  __typename?: "Mutation";
  createUser?: {
    __typename?: "User";
    id: string;
    first_name?: string | null;
    family_name?: string | null;
    email?: string | null;
    validated?: boolean | null;
  } | null;
};

export type ValidateUserMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ValidateUserMutation = {
  __typename?: "Mutation";
  validateUser?: { __typename?: "User"; id: string } | null;
};

export type InvalidateUserMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type InvalidateUserMutation = {
  __typename?: "Mutation";
  invalidateUser?: { __typename?: "User"; id: string } | null;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never }>;

export type GetPostsQuery = {
  __typename?: "Query";
  posts?: Array<{
    __typename?: "Post";
    id: string;
    content?: string | null;
    updatedAt?: Date | null;
    createdAt?: Date | null;
    author?: {
      __typename?: "User";
      id: string;
      first_name?: string | null;
      role?: Role | null;
    } | null;
  } | null> | null;
};

export type GetPostsForDashboardQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetPostsForDashboardQuery = {
  __typename?: "Query";
  posts?: Array<{
    __typename?: "Post";
    content?: string | null;
    id: string;
    validated?: boolean | null;
    createdAt?: Date | null;
    author?: { __typename?: "User"; family_name?: string | null } | null;
    department?: { __typename?: "Department"; name?: string | null } | null;
  } | null> | null;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: "Query";
  users?: Array<{
    __typename?: "User";
    id: string;
    first_name?: string | null;
    family_name?: string | null;
    email?: string | null;
    validated?: boolean | null;
  } | null> | null;
};

export type GetDepartmentsQueryVariables = Exact<{ [key: string]: never }>;

export type GetDepartmentsQuery = {
  __typename?: "Query";
  departments?: Array<{
    __typename?: "Department";
    id: string;
    name?: string | null;
  } | null> | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "User";
    id: string;
    first_name?: string | null;
    family_name?: string | null;
    email?: string | null;
    role?: Role | null;
  } | null;
};

export type GetDepartmentForDashboardQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetDepartmentForDashboardQuery = {
  __typename?: "Query";
  departments?: Array<{
    __typename?: "Department";
    id: string;
    name?: string | null;
    chef?: {
      __typename?: "User";
      first_name?: string | null;
      id: string;
    } | null;
  } | null> | null;
};
