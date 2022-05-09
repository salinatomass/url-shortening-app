import React, { useState } from 'react';
import { useShortenList } from '../hooks/useShortenList';

import './styles/Shorten.css';
import BgShortenMobile from '../images/bg-shorten-mobile.svg';

import ShortenItem from './ShortenItem';

const Shorten = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { shortenList, updateShortenList } = useShortenList();

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
            style={{ backgroundImage: `url(${BgShortenMobile})` }}
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
