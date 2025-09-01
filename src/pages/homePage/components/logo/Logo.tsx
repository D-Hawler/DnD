import { Link } from 'react-router-dom';

import '../../HomePage.module.css';

function Logo() {
  return (
    <header>
      <Link to='/'>
          <img src="src\assets\logo.png" />
          <h1>DnD skill list:</h1>
      </Link>
    </header>
  );
}

export default Logo;
