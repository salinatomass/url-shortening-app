import { ResponseOfShortenAPI } from '../types';

const API_URL = 'https://api.shrtco.de/v2/shorten';

const getShortenURL = async (uri: string): Promise<ResponseOfShortenAPI> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_URL}?url=${uri}`);
      const data = (await response.json()) as ResponseOfShortenAPI;

      if (!data.ok) throw new Error(data.error);

      console.log(data);

      resolve(data);
    } catch (err) {
      reject(err);
    }
  });
};

export default getShortenURL;
