import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import axios, { AxiosError } from 'axios';
import { SummonerDataType } from 'types/query';

const RIOT_KEY = 'RGAPI-4952e881-03b9-414c-bca9-49e5045255dc';

const getData = async (nickname: string): Promise<SummonerDataType> => {
  const firstRes = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`);
  const userId = firstRes.data.id;

  const secondRes = await axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`);

  return secondRes.data[0];
};

const useSummonerData = <TData = SummonerDataType>(
  nickname: string | null,
  options?: UseQueryOptions<SummonerDataType, AxiosError, TData>,
) => {
  if (typeof nickname === 'string') return useQuery(['data', nickname] as QueryKey, () => getData(nickname), options);
  else return null;
};

// export const useFetchOrder = <T>(
//   orderNo: string,
//   options?: UseQueryOptions<ServerResponse<FetchOrderResponse>, AxiosError<ErrorResponse>, T>,
// ): UseQueryResult<T, AxiosError<ErrorResponse>> =>
//   useQuery('fetchOrder', (): Promise<ServerResponse<FetchOrderResponse>> => fetchOrder(orderNo), options);

export default useSummonerData;
