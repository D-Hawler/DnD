import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { RefObject } from 'react';

import './NavigationPanel.css';

interface ClassPageProps {
  level5: RefObject<HTMLDivElement | null>;
  level10: RefObject<HTMLDivElement | null>;
  level20: RefObject<HTMLDivElement | null>;
  onClick: (ref: RefObject<HTMLDivElement | null>) => void;
}

function NavigationPanel({
  level5,
  level10,
  level20,
  onClick,
}: ClassPageProps) {
  const { className } = useParams<{ className: string }>();

  return (
    <nav>
      <div
        style={className === undefined ? { justifyContent: 'flex-start' } : {}}
      >
        <button>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"></path>
            </svg>
          </Link>
        </button>
        {className !== undefined && (
          <ul>
            <li>
              <button onClick={() => onClick(level5)}>level 5</button>
            </li>
            <li>
              <button onClick={() => onClick(level10)}>level 10</button>
            </li>
            <li>
              <button onClick={() => onClick(level20)}>level 20</button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default NavigationPanel;
