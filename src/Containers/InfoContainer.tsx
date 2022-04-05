import { InfoComponent } from 'Components/InfoComponent';
import { Loading } from 'Components/Loading';
import useSummonerData from 'hooks/useSummonerData';
import React from 'react';

import { useSearchParams } from 'react-router-dom';

const InfoContainer = ({ pageParam }: { pageParam: string | null }) => {
  const results = useSummonerData(pageParam, {
    refetchOnWindowFocus: false,
  });

  console.log(results?.data);

  return <>{results?.isLoading ? <Loading /> : <InfoComponent summonerData={results?.data} />}</>;
};

export default InfoContainer;
