import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    const { name: search } = useSelector(state => state.filters);
    return (
        <div className={css.container}>
            <p>Find contacts by name</p>
            <input
                type='text'
                value={search}
                onChange={e => dispatch(changeFilter(e.target.value))}
            />
        </div>
    );
};

export default SearchBox;