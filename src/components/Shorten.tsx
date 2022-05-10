import './styles/Shorten.css';
import React, { useState } from 'react';
import { useShortenState } from '../hooks/useShortenState';

import ShortenItem from './ShortenItem';
import useDesktopBreakpoint from '../hooks/useDesktopBreakpoint';

import BgShortenMobile from '../images/bg-shorten-mobile.svg';
import BgShortenDesktop from '../images/bg-shorten-desktop.svg';

const Shorten = () => {
  const { shortenState, addToShortenList, updateCopiedURL } = useShortenState();
  const { shortenList, errorMessage, isLoading, copiedURL } = shortenState;
  const isDesktop = useDesktopBreakpoint();

  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');

    await addToShortenList(inputValue);
  };

  return (
    <section className="Shorten">
      <div className="wrapper">
        <div className="Shorten-container">
          <form
            className="Shorten-form"
            style={{
              backgroundImage: `url(${
                isDesktop ? BgShortenDesktop : BgShortenMobile
              })`,
            }}
            onSubmit={handleSubmit}
          >
            <div className={`Shorten-input ${errorMessage && 'error'}`}>
              <input
                type="text"
                name="link"
                value={inputValue}
                placeholder="Shorten a link here..."
                onChange={handleChange}
              />
              <p className="Shorten-input-error">{errorMessage}</p>
            </div>
            <button
              className="Shorten-submit"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Shorten it'}
            </button>
          </form>
          <ul className="Shorten-list" id="list">
            {shortenList.map(item => (
              <ShortenItem
                item={item}
                copied={item.full_short_link === copiedURL}
                updateCopiedURL={updateCopiedURL}
                key={item.code}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
