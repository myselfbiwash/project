import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 p-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5 text-yellow-400" />
      ) : (
        <FaMoon className="w-5 h-5 text-slate-900" />
      )}
    </button>
  );
}