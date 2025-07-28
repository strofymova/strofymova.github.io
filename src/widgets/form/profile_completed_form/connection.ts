import { gql } from '@apollo/client';
import { PROFILE } from '../../../app/connection';
import { Mutation, ProfileMutationsUpdateArgs } from '../../../shared/server.types';

import { get } from '../../../utility/unchanged';

export type UpdateProfileVars = ProfileMutationsUpdateArgs;
export type UpdateProfileResponse = Pick<Mutation, 'profile'>;
export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateProfileInput!) {
    profile {
      update(input: $input) {
        ...Profile
      }
    }
  }
  ${PROFILE}
`;

export const extractUpdateProfile = (data: UpdateProfileResponse): Mutation['profile']['update'] =>
  get('profile.update', data);
