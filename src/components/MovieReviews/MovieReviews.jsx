import css from './MovieReviews.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../services/api';
const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, [movieId]);

    if (!Array.isArray(reviews) || reviews.length === 0) {
        return <p>No reviews found for this movie.</p>
    };

    return (
        <ul className={css.list}>
            {reviews.map(review => (
                <li key={review.id} className={css.item}>
                    <h3 className={css.author}>Arthor: {review.author}</h3>
                    <p className={css.review}>{review.content}</p>
                </li>
            ))}
        </ul>
    )
};

export default MovieReviews;
