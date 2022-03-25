import useSummonerData from 'hooks/useSummonerData';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

const InfoContainer = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('summoner');

  const { status, data, error, isFetching } = useSummonerData(pageParam);

  console.log(pageParam);
  console.log(data);

  return <div>hello</div>;
};

export default InfoContainer;
