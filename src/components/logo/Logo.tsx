import { Link } from 'react-router-dom';
import ThemeToggleButton from '../ThemeToggleButton/ThemeToggleButton';

import logo from '../../assets/logo.png';
import style from './Logo.module.css';

interface LogoProp {
  icon?: string | null;
  className?: string | null;
}

function Logo({ icon, className }: LogoProp) {
  return (
    <header className={style.logo}>
      <Link to="/">
        {!icon && !className && <img src={logo} />}
        <h1>
          {icon != null || className != null ? (
            <>
              {icon} Класс: {className}
            </>
          ) : (
            <>DnD skill list:</>
          )}
        </h1>
      </Link>
      <ThemeToggleButton />
    </header>
  );
}

export default Logo;
