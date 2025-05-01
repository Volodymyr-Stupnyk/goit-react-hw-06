import css from './MoviePage.module.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../components/services/api';
import MovieList from '../../components/MovieList/MovieList';

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') || '';

    useEffect(() => {
        if (!query) return;
        async function fetchMoviesPage() {
            try {
                const results = await searchMovies(query);
                setMovies(results);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };
        fetchMoviesPage();
    }, [query]);

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchQuery = form.elements.query.value.trim();
        if (searchQuery === '') return;
        setSearchParams({ query: searchQuery });
        form.reset();
    };

    return (
        <div className={css.container}>
            <form className={css.form} onSubmit={handleSearchSubmit}>
                <input className={css.input} type="text" name='query' placeholder='Search movies...' />
                <button type="submit">Search</button>
            </form>
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
};

export default MoviePage;
