import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';
import { SummonerDataType } from 'types/query';

const RIOT_KEY = 'RGAPI-6763462b-eaa7-42c8-b3ad-0197e2ac6283';

async function getData(
  nickname: string | undefined,
): Promise<SummonerDataType | undefined> {
  if (typeof nickname === 'string') {
    const firstRes = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`,
    );
    const userId = firstRes.data.id;

    const secondRes = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`,
    );
    const summonerData = secondRes.data;

    return summonerData;
  }
  return undefined;
}

const useSummonerData = async (
  nickname: string | null,
): Promise<UseQueryResult<SummonerDataType, Error> | undefined> => {
  if (typeof nickname === 'string') {
    return useQuery(['data', nickname], await getData(nickname), {
      enabled: false,
    });
  }
  return undefined;
};

export default useSummonerData;
