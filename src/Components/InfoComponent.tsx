import React from 'react';
import { SummonerDataType } from 'types/RiotApiTypes';

export const InfoComponent = ({ summonerData }: { summonerData: SummonerDataType }) => {
  return (
    <>
      <div>{summonerData?.summonerName}</div>
      <div>
        {summonerData?.tier}({summonerData?.rank})
      </div>
    </>
  );
};
