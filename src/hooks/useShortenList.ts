import { useState } from 'react';
import { ShortURL } from '../types';
import getShortenURL from '../services/shortenApi';

export const useShortenList = () => {
  const [shortenList, setShortenList] = useState<ShortURL[]>([]);

  const updateShortenList = async (link: string): Promise<void> => {
    try {
      const shortenURL = await getShortenURL(link);

      const linkAlreadyShortened = shortenList.find(item => {
        return item.original_link === shortenURL.result?.original_link;
      });

      if (linkAlreadyShortened)
        return alert('The Link has already been shortened');

      setShortenList(prevShortenList => [
        ...prevShortenList,
        shortenURL.result,
      ]);
    } catch (err) {
      if (err instanceof Error) alert(err.message);
    }
  };
  return { shortenList, updateShortenList };
};
