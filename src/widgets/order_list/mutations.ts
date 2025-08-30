import { gql } from '@apollo/client';
import { ORDER } from './fragments';
import { get } from 'unchanged';
import { Mutation } from 'src/shared/server.types';
import { OrderAddMutationsArgs } from 'src/shared/orders.types';

export type AddOrderVars = OrderAddMutationsArgs;
export type AddOrderResponse = Pick<Mutation, 'orders'>;

export const ADD_ORDER = gql`
  mutation Add($input: OrderAddInput!) {
    orders {
      add(input: $input) {
        ...Order
      }
    }
  }
  ${ORDER}
`;

export const extractAddOrder = (data: AddOrderResponse): Mutation['orders']['add'] => get('orders.add', data);
