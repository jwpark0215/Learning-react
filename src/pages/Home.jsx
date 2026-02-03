import MovieCard from "../components/Movie";
import {useState,useEffect} from "react";
import {getPopularMovies, searchMovies} from "../services/api";    
import "../css/Home.css"

function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err){
                console.log(err)
                setError("Failed to load movies..")
            }finally{
                setLoading(false);
            }
        }

        loadPopularMovies()
    },[])
  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchTerm.trim()) return
    if(loading) return
    setLoading(true) 
    
    try{
        const final = await searchMovies(searchTerm)
        setMovies(final)
        setError(null)
    }catch(err){
        console.log(err)
        setError("Failed to search movies..")
    } finally{
        setLoading(false)
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" className="search-input " value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
        {error && <div className = 'error-message'> {error} </div>}

      {loading ? <div className="loading">Loading</div> : <div className="movies-grid">
        {movies.map((movie) => (
            (<MovieCard movie={movie} key={movie.id} />) 
        ))}
      </div>}
      
    </div>
  );
}

export default Home;
