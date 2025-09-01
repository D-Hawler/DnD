import { Link } from 'react-router-dom';

import Logo from './components/logo/Logo';

import { dataClass } from '../../data/dataClass';
import type { ClassProp } from '../../data/dataClass';

import style from './HomePage.module.css';

function HomePage() {
  return (
    <section className={style.homePage}>
      <Logo />
      <div>
        {dataClass.map((cls: ClassProp) => (
          <Link to={`class/${cls.path}`} key={cls.path}>
            <div>
              <h2>
                Класс: {cls.class}
                {cls.icon}
              </h2>
              <p>({cls.role})</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default HomePage;
