import { useParams } from "react-router-dom";

const TvShowPlayer = () => {
  const { playerId } = useParams();
  const movieUrl = `https://vidsrc.xyz/embed/tv/${playerId}`;

  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={movieUrl}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TvShowPlayer;
