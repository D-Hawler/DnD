import { useLayoutEffect, useState } from 'react';

import MoonIcon from '../MoonIcon/MoonIcon';
import SunIcon from '../SunIcon/SunIcon';

function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() => {
    let theme =
      localStorage.getItem('isDark') ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (typeof theme === 'string') {
      if (theme === 'true') theme = true;
      else theme = false;
    }
    return theme;
  });

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark-theme', isDark === true);
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
