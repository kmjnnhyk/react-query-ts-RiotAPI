import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosResponse } from 'axios';
import { SummonerDataType } from 'types/query';

const RIOT_KEY = 'RGAPI-4045b2a0-ad01-4f2d-8ecf-22fea4efdf34';

const getData = async (nickname: string): Promise<AxiosResponse<SummonerDataType>> => {
  const firstRes = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`);
  const userId = firstRes.data.id;

  const secondRes = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`);

  return secondRes;
};

const useSummonerData = (nickname: string): UseQueryResult<AxiosResponse<SummonerDataType>> => {
  return useQuery(['data', nickname], () => getData(nickname), {
    enabled: false,
  });
};

export default useSummonerData;
