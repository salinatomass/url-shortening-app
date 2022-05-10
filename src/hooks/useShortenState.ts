import { useState } from 'react';
import { ShortenState } from '../types';
import getShortenURL from '../services/shortenApi';

const initialShortenState = {
  shortenList: [],
  errorMessage: '',
  isLoading: false,
  copiedURL: '',
};

export const useShortenState = () => {
  const [shortenState, setShortenState] =
    useState<ShortenState>(initialShortenState);

  const addToShortenList = async (link: string): Promise<void> => {
    try {
      setShortenState(prevState => ({ ...prevState, isLoading: true }));

      const shortenURL = await getShortenURL(link);

      const linkAlreadyShortened = shortenState.shortenList.find(
        item => item.code === shortenURL.result?.code
      );

      if (linkAlreadyShortened)
        return setShortenState(prevState => ({
          ...prevState,
          errorMessage: 'The Link has already been shortened',
          isLoading: false,
        }));

      setShortenState(prevState => ({
        ...prevState,
        errorMessage: '',
        shortenList: [...prevState.shortenList, shortenURL.result],
        isLoading: false,
      }));
    } catch (err) {
      if (err instanceof Error)
        setShortenState({
          ...shortenState,
          errorMessage: err.message,
          isLoading: false,
        });
    }
  };

  const updateCopiedURL = (link: string) => {
    return setShortenState(prevState => ({ ...prevState, copiedURL: link }));
  };

  return { shortenState, addToShortenList, updateCopiedURL };
};
