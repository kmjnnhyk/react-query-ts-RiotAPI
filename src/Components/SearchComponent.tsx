import React, { useRef } from 'react';

export const SearchComponent = <ParamType extends string>(props: { moveURL: (query: ParamType) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.moveURL(inputRef.current?.value as ParamType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' ref={inputRef} />
      <button type='submit'>SEARCH</button>
    </form>
  );
};
