import useSummonerData from 'hooks/useSummonerData';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const InfoContainer = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('summoner');

  const result = pageParam && useSummonerData(pageParam).data;

  console.log(pageParam);
  console.log(result);

  return <div>hello</div>;
};

export default InfoContainer;
