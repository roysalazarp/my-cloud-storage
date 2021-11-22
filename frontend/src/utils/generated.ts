// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUserInputDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateUserOutputDto = {
  __typename?: 'CreateUserOutputDto';
  wasAccountCreated: Scalars['Boolean'];
};

export type LoginInputDto = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutputDto = {
  __typename?: 'LoginOutputDto';
  accessToken: Scalars['String'];
  user: UserOutputDto;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserOutputDto;
  login: LoginOutputDto;
  logout: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  args: CreateUserInputDto;
};


export type MutationLoginArgs = {
  args: LoginInputDto;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  me?: Maybe<UserOutputDto>;
  refreshToken: RefreshTokenOutputDto;
  usersList: Array<UsersListOutputDto>;
};

export type RefreshTokenOutputDto = {
  __typename?: 'RefreshTokenOutputDto';
  accessToken: Scalars['String'];
  ok: Scalars['Boolean'];
  user: UserOutputDto;
};

export type UserOutputDto = {
  __typename?: 'UserOutputDto';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UsersListOutputDto = {
  __typename?: 'UsersListOutputDto';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Exact<{
  args: CreateUserInputDto;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserOutputDto', wasAccountCreated: boolean } };

export type LoginMutationVariables = Exact<{
  args: LoginInputDto;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutputDto', accessToken: string, user: { __typename?: 'UserOutputDto', id: string, email: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UserOutputDto', id: string, email: string } | null | undefined };

export type RefreshTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenQuery = { __typename?: 'Query', refreshToken: { __typename?: 'RefreshTokenOutputDto', ok: boolean, accessToken: string, user: { __typename?: 'UserOutputDto', id: string, email: string } } };


export const CreateUserDocument = gql`
    mutation CreateUser($args: CreateUserInputDto!) {
  createUser(args: $args) {
    wasAccountCreated
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($args: LoginInputDto!) {
  login(args: $args) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RefreshTokenDocument = gql`
    query RefreshToken {
  refreshToken {
    ok
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type RefreshTokenQueryResult = Apollo.QueryResult<RefreshTokenQuery, RefreshTokenQueryVariables>;