export type SocialMediaIcon =
  | 'facebook'
  | 'twitter'
  | 'pinterest'
  | 'instagram';

export interface ShortedURL {
  code: string;
  original_link: string;
  short_link: string;
  full_short_link: string;
}

export interface ResponseOfShortenAPI {
  ok: boolean;
  result: ShortedURL;
  error_code?: number;
  error?: string;
}

export interface ShortenState {
  shortenList: ShortedURL[];
  copiedURL: string;
  isLoading: boolean;
  errorMessage: string;
}
