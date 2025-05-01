import css from './NotFoundPage.module.css';
import { Link } from 'react-router-dom';

const NotFoundpage = () => {
    return (
        <p className={css.title}>
            Not found page.
            <Link to='/' className={css.link}>Go to back</Link>
        </p>
    )
};

export default NotFoundpage
