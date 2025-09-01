import { useRef } from 'react';
import type { RefObject } from 'react';
import { useParams } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';
import ClassPage from './pages/classPage/ClassPage';
import NavigationPanel from './components/navigationPanel/NavigationPanel';

import './App.css';

function App() {
  const { className } = useParams<{ className: string }>();
  const level5 = useRef<HTMLDivElement>(null);
  const level10 = useRef<HTMLDivElement>(null);
  const level20 = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {className === undefined ? (
        <HomePage />
      ) : (
        <ClassPage level5={level5} level10={level10} level20={level20} />
      )}
      <div className="placeholder" />
      <NavigationPanel level5={level5} level10={level10} level20={level20} onClick={scrollToSection} />
    </main>
  );
}

export default App;
