import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContainer: React.FC = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useSearchParams();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch({ summoner: input });
    setInput('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' value={input} onChange={onChange} />
      <button type='submit'>SEARCH</button>
    </form>
  );
};

export default SearchContainer;
