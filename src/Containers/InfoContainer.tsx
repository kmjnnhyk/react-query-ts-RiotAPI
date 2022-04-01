import useSummonerData from 'hooks/useSummonerData';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const InfoContainer = () => {
  const [searchParams] = useSearchParams();
  const pageParam = searchParams.get('summoner');

  const results =
    pageParam &&
    useSummonerData(pageParam, {
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        console.log(data);
      },
    });

  return <div>hello</div>;
};

export default InfoContainer;
