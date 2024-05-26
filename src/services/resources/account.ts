import { client } from '../axios';
import { createGetQueryHook } from '../helpers';
import { User } from './user';

export async function getAccount() {
  const response = await client.get('account');
  return User.parse(response.data);
}

const BASE_ENDPOINT = 'account';
const QUERY_KEY = 'account';

export const useGetAccount = createGetQueryHook({
  endpoint: BASE_ENDPOINT,
  responseSchema: User,
  rQueryParams: { queryKey: QUERY_KEY },
});
