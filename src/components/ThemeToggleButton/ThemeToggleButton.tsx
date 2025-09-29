import { useEffect, useState } from 'react';

import MoonIcon from '../MoonIcon/MoonIcon';
import SunIcon from '../SunIcon/SunIcon';

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() => {
    let theme =
      localStorage.getItem('isDark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (typeof theme === 'string') {
      if (theme === 'true') return (theme = true);
      if (theme === 'false') theme = false;
    }
    return theme;
  });

  useEffect(() => {
    const root = document.getElementById('root');

    if (!root) {
      throw new Error('Root container not found');
    }
    root.classList.toggle('dark-theme', isDark === true);

    console.log(isDark);
  }, [isDark]);

  const themeSwitcher = () => {
    setIsDark((prev) => {
      localStorage.setItem('isDark', !prev ? 'true' : 'false');
      return !prev;
    });
  };

  return (
    <button onClick={themeSwitcher}>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

export default ThemeToggleButton;
