export interface ShortURL {
  code: string;
  original_link: string;
  short_link: string;
  full_short_link: string;
}

export interface ResponseOfShortenAPI {
  ok: boolean;
  result: ShortURL;
  error_code?: number;
  error?: string;
}
