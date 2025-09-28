import { Link } from 'react-router-dom';

import Logo from '../../components/logo/Logo';

import { dataClass } from '../../data/dataClass';
import type { ClassProp } from '../../data/dataClass';

import style from './HomePage.module.css';

function HomePage() {
  return (
    <>
      <Logo />
      <section className={style.homePage}>
        <div>
          {dataClass.map((cls: ClassProp) => (
            <Link to={`class/${cls.path}`} key={cls.path}>
              <div>
                <h2>
                  {cls.class && cls.icon ? (
                    <>
                      Класс: {cls.class}
                      {cls.icon}
                    </>
                  ) : (
                    <>
                      {cls.class && (
                        <>
                          Класс: {cls.class}
                          <br />
                        </>
                      )}
                      {'Coming soon...'}
                    </>
                  )}
                </h2>
                {cls.role && <p>({cls.role})</p>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
