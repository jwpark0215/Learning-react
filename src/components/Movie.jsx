import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
function Movie({ movie }) {

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id)
    function OnClickFavoriteBtn(e) {
    e.preventDefault();
    if (favorite){
        removeFromFavorites(movie.id)
    }
    else{
        addToFavorites(movie)
    }
  }

  return (
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={OnClickFavoriteBtn}>
                    &#10084;
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    
  );
}

export default Movie;
