import { InfoComponent } from 'Components/InfoComponent';
import { Loading } from 'Components/Loading';
import useSummonerData from 'hooks/useSummonerData';

const InfoContainer = ({ pageParam }: { pageParam: string | null }) => {
  const results = useSummonerData(pageParam, {
    refetchOnWindowFocus: false,
  });

  if (results?.isLoading) return <Loading />;

  if (results?.isError) return <h1>RIOT API ERROR!</h1>;

  return <InfoComponent summonerData={results?.data} />;
};

export default InfoContainer;
