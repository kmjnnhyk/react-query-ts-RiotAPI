import { SearchComponent } from 'Components/SearchComponent';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchContainer = () => {
  const [params, setParams] = useSearchParams();
  const moveURL = <ParamType extends string>(query: ParamType) => {
    setParams({ summoner: query });
  };

  return <SearchComponent moveURL={moveURL} />;
};

export default SearchContainer;
