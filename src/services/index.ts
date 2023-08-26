import axios from 'axios';
import { API_URL } from '../environments';
import { getUserToken } from '../utils';
import { ApiProps } from './types';

const getApi = async ({
  path,
  method,
  data,
  contentType,
  query = '',
}: ApiProps) => {
  try {
    const token = await getUserToken();
    const Authorization = token ? `Bearer ${token}` : '';
    const response = await axios({
      method,
      headers: {
        'Content-Type': contentType,
        Authorization,
      },
      url: `${API_URL}${path}${query}`,
      data,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default getApi;
