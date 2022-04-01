import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { SummonerDataType } from 'types/query';

const RIOT_KEY = 'RGAPI-fd0e57ea-7a56-4a0a-b38d-01bdc2fc415b';

const getData = async (nickname: string): Promise<SummonerDataType> => {
  const firstRes = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`);
  const userId = firstRes.data.id;

  const secondRes = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`);

  return secondRes.data[0];
};

const useSummonerData = <TData = SummonerDataType>(nickname: string, options?: UseQueryOptions<SummonerDataType, AxiosError, TData>) =>
  useQuery(['data', nickname] as QueryKey, () => getData(nickname), options);

export default useSummonerData;
