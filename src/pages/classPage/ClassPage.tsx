import type { RefObject } from 'react';
import { useParams } from 'react-router-dom';

import Logo from '../../components/logo/Logo';

import { dataClass } from '../../data/dataClass';
import type { ClassProp } from '../../data/dataClass';

import style from './ClassPage.module.css';

interface ClassPageProps {
  level5: RefObject<HTMLDivElement | null>;
  level10: RefObject<HTMLDivElement | null>;
  level20: RefObject<HTMLDivElement | null>;
}

function ClassPage({ level5, level10, level20 }: ClassPageProps) {
  const { className } = useParams<{ className: string }>();

  const classObj = dataClass.find((cls: ClassProp) => cls.path === className);

  if (!classObj) {
    return (
      <section>
        <p>
          Произошла ошибка, по какой-то причине, попробуйте перезагрузить
          страницу.
        </p>
      </section>
    );
  }

  return (
    <>
      <Logo icon={classObj.icon} className={classObj.class} />
      <section className={style.classPage}>
        <div>
          <article ref={level5}>
            <h2>level 5</h2>
            <div>
              {classObj.subClasses?.subClassOne && (
                <div>
                  <h3>
                    Подкласс 1:{' '}
                    {classObj.subClasses?.subClassOne?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassOne?.level5?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassTwo && (
                <div>
                  <h3>
                    Подкласс 2:{' '}
                    {classObj.subClasses?.subClassTwo?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassTwo?.level5?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassThree && (
                <div>
                  <h3>
                    Подкласс 3:{' '}
                    {classObj.subClasses?.subClassThree?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassThree?.level5?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
            </div>
          </article>
          <article ref={level10}>
            <h2>level 10</h2>
            <div>
              {classObj.subClasses?.subClassOne && (
                <div>
                  <h3>
                    Подкласс 1:{' '}
                    {classObj.subClasses?.subClassOne?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassOne?.level10?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassTwo && (
                <div>
                  <h3>
                    Подкласс 2:{' '}
                    {classObj.subClasses?.subClassTwo?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassTwo?.level10?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassThree && (
                <div>
                  <h3>
                    Подкласс 3:{' '}
                    {classObj.subClasses?.subClassThree?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassThree?.level10?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
            </div>
          </article>
          <article ref={level20}>
            <h2>level 20</h2>
            <div>
              {classObj.subClasses?.subClassOne && (
                <div>
                  <h3>
                    Подкласс 1:{' '}
                    {classObj.subClasses?.subClassOne?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassOne?.level20?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassTwo && (
                <div>
                  <h3>
                    Подкласс 2:{' '}
                    {classObj.subClasses?.subClassTwo?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassTwo?.level20?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
              {classObj.subClasses?.subClassThree && (
                <div>
                  <h3>
                    Подкласс 3:{' '}
                    {classObj.subClasses?.subClassThree?.subClassName ?? ''}
                  </h3>
                  <ul>
                    {classObj.subClasses?.subClassThree?.level20?.ability?.map(
                      (skill, index) => {
                        const [boldPart, ...restParts] =
                          skill.description.split('—');
                        return (
                          <li key={index}>
                            {<strong>{boldPart?.trim()}</strong>}
                            {!skill.isActive && (
                              <>
                                {' ('}
                                <u>{'пассивный'}</u>
                                {')'}
                              </>
                            )}
                            {' -' + restParts.join('-')}
                          </li>
                        );
                      }
                    ) ?? ''}
                  </ul>
                </div>
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ClassPage;
