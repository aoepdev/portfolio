import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeButton = ({ toggleTheme, isDark }: { toggleTheme: () => void; isDark: boolean }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="md:block p-2"
    >
      {isDark ? (
        <SunIcon className="w-6 h-6 text-yellow-500" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeButton;