// @ts-nocheck

import UseTrendingList from "@/hooks/useTrandingList";
import TrendingMovie from "./TrendingMovie";
import TrendingTv from "./TrendingTv";
import LoadingSkeleton from "../LoadingSkeleton";

const Trending = () => {
  const { trendingData } = UseTrendingList();
  const image = trendingData?.slice(0, 1).map((data) => {
    return data.poster_path;
  });
  return (
    <>
      {/* <img
        src={`https://image.tmdb.org/t/p/original${image}`}
        alt="poster"
        className=" transition-all min-w-full object-cover"
        style={{ height: "700px", objectPosition: "10% 15%" }}
      /> */}
      {/* <LoadingSkeleton /> */}
      <TrendingMovie />
      <TrendingTv />
    </>
  );
};

export default Trending;
