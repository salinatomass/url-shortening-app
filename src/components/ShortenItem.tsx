import { useState } from 'react';
import { ShortURL } from '../types';

import './styles/ShortenItem.css';

interface ShortenItemProps {
  item: ShortURL;
}

const ShortenItem = ({ item }: ShortenItemProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(item.full_short_link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <li className="Shorten-item">
      <p className="Shorten-original">{item.original_link}</p>
      <div className="Shorten-item-divider">
        <p className="Shorten-link">{item.full_short_link}</p>
        <button
          className={`Shorten-copy ${copied && 'active'}`}
          type="button"
          onClick={copyToClipboard}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </li>
  );
};

export default ShortenItem;
