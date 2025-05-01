import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const setActiveClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={setActiveClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setActiveClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
