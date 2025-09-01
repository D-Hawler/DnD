import { Link } from 'react-router-dom';

import logo from '../../../../assets/logo.png';
import '../../HomePage.module.css';

function Logo() {
  return (
    <header>
      <Link to="/">
        <img src={logo} />
        <h1>DnD skill list:</h1>
      </Link>
    </header>
  );
}

export default Logo;
