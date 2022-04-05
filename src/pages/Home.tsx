import InfoContainer from 'Containers/InfoContainer';
import SearchContainer from 'Containers/SearchContainer';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('summoner');
  return (
    <>
      <SearchContainer />
      <InfoContainer pageParam={pageParam} />
    </>
  );
};

export default Home;
