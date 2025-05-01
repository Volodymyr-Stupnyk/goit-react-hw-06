import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul className={css.list}>
            {movies.map(movie => (
                movie.id && (
                    <li className={css.item} key={movie.id}>
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{ from: location }}
                            className={css.link}
                        >
                            {movie.title || movie.name}
                        </Link>
                    </li>
                )
            ))}
        </ul>
    )
};

export default MovieList;
