import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import style from './Logo.module.css';

interface LogoProp {
  icon?: string | null;
  className?: string | null;
}

function Logo({ icon, className }: LogoProp) {
  if (icon != null || className != null) {
    return (
      <header className={style.logo}>
        <Link to="/">
          <h1>
            {icon} Класс: {className}
          </h1>
        </Link>
      </header>
    );
  }

  return (
    <header className={style.logo}>
      <Link to="/">
        <img src={logo} />
        <h1>DnD skill list:</h1>
      </Link>
    </header>
  );
}

export default Logo;
