import css from './MovieCast.module.css';
import { getMovieCast } from '../services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast]  = useState([]);

    useEffect(() => {
        async function fetchCast() {
            try {
                const data = await getMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.error('Error fetching cast:', error);
            }
        };
        fetchCast();
    }, [movieId]);

    if (!Array.isArray(cast) || cast.length === 0) {
       return <p>No cast available.</p>;
    };
    return (
        <ul className={css.list}>
            {cast.map(actor => (
                <li key={actor.id} className={css.item}>
                    {actor.profile_path && (
                        <div className={css.imageBox}>
                            <img className={css.image}
                                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                                alt={actor.name}
                                width="100"
                            />
                        </div>
                    )}

                    <div className={css.desc}>
                        <h3 className={css.name}>{actor.name}</h3>
                        <p className={css.character}>{actor.character}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
};

export default MovieCast;
