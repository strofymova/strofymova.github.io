import { gql } from '@apollo/client';
import { Query } from '../../../../shared/server.types';
import { get } from '../../../../utility/unchanged';

export type GetProfileResponse = Pick<Query, 'profile'>;
export const GET_PROFILE = gql`
  query getProfile {
    profile {
      email
      id
      name
      signUpDate
    }
  }
`;

export const extractGetProfile = (data: GetProfileResponse): Query['profile'] => get('profile', data);
