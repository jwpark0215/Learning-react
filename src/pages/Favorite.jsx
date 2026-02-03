import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import Movie from "../components/Movie";

function Favorite() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favourite Movies Yet</h2>
      <p>Start adding movies to your favorites!</p>
    </div>
  );
}

export default Favorite;
