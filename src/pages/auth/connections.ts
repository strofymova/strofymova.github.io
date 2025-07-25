import { gql } from '@apollo/client';
import { ProfileMutationsSigninArgs, AuthResult, ProfileMutationsSignupArgs, Mutation } from 'src/shared/server.types';
import { get } from 'src/utility/unchanged';

export type SignInVars = ProfileMutationsSigninArgs;
export type SignInResponse = Pick<Mutation, 'profile'>;
export const SIGN_IN = gql`
  mutation signIn($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        token
      }
    }
  }
`;

export const extractSignIn = (data: SignInResponse): Mutation['profile']['signin'] => get('profile.signin', data);

export type SignUpVars = ProfileMutationsSignupArgs;
export type SignUpResponse = AuthResult;
export const SIGN_UP = gql`
  mutation signUp($email: String!, $password: String!) {
    profile {
      signup(email: $email, password: $password) {
        token
      }
    }
  }
`;

export const extractSignUp = (data: SignUpResponse): Mutation['profile']['signup'] => get(`profile.signup`, data);
