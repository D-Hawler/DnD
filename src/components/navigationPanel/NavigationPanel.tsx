import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import type { RefObject } from 'react';

import './NavigationPanel.module.css';

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
            <img src="src\assets\home.png" />
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
