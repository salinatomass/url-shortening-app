import './styles/Shorten.css';
import React, { useState } from 'react';
import { useShortenList } from '../hooks/useShortenList';

import ShortenItem from './ShortenItem';
import useDesktopBreakpoint from '../hooks/useDesktopBreakpoint';

import BgShortenMobile from '../images/bg-shorten-mobile.svg';
import BgShortenDesktop from '../images/bg-shorten-desktop.svg';

const Shorten = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { shortenList, updateShortenList } = useShortenList();
  const isDesktop = useDesktopBreakpoint();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');

    await updateShortenList(inputValue);
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
            <input
              className="Shorten-input"
              type="text"
              name="link"
              value={inputValue}
              placeholder="Shorten a link here..."
              onChange={handleChange}
            />
            <button className="Shorten-submit" type="submit">
              Shorten it
            </button>
          </form>
          <ul className="Shorten-list">
            {shortenList.map(item => (
              <ShortenItem item={item} key={item.code} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
