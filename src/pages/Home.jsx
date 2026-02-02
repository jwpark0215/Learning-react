import MovieCard from "../components/Movie";
import {useState} from "react";


function Home() {

    const [searchTerm, setSearchTerm] = useState("");
  const movies = [
    { id: 1, title: "Movie 1", release_date: "2022" },
    { id: 2, title: "Movie 2", release_date: "2023" },
    { id: 3, title: "Movie 3", release_date: "2024" },
  ];
  const handleSearch = () => {};

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" className="search-input "></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
