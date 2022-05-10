import './styles/ShortenItem.css';
import { ShortedURL } from '../types';

interface ShortenItemProps {
  item: ShortedURL;
  copied: boolean;
  updateCopiedURL: (link: string) => void;
}

const ShortenItem = ({ item, copied, updateCopiedURL }: ShortenItemProps) => {
  const mapLink = (link: string): string => {
    if (link.length > 30) return link.slice(0, 27) + '...';
    return link;
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(item.full_short_link);
    updateCopiedURL(item.full_short_link);
  };

  return (
    <li className="Shorten-item">
      <p className="Shorten-original">{mapLink(item.original_link)}</p>
      <div className="Shorten-item-divider">
        <a
          href={item.full_short_link}
          rel="noreferrer"
          target="_blank"
          className="Shorten-link"
        >
          {mapLink(item.full_short_link)}
        </a>
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
