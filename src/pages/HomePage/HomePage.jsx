import css from "./HomePage.module.css";
import { getTrendingMovies } from "../../components/services/api";
import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";


const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setLoading(true);
                const data = await getTrendingMovies();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTrendingMovies();
    }, []);


    return (
        <div className={css.container}>
            <h1 className={css.title}>Trending today</h1>
            {Loading && <p>Loading...</p>}
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
};

export default HomePage;
