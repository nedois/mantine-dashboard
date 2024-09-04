import { client } from '../axios';
import { User } from '../entities';

export async function getAccountInfo() {
  const response = await client.get('account');
  return User.parse(response.data);
}
