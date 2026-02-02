function Movie({movie}){
    function OnClickFavoriteBtn(){
        alert("Favorite button clicked!");
    }
    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={OnClickFavoriteBtn}>
                        &#10084;
                    </button>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_data}</p>
                </div>
            </div>
        </div>
    )
}

export default Movie