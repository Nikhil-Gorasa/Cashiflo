'use client';

import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl mx-auto z-50">
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-lg border border-gray-200/20 dark:border-gray-700/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Cashiflo
            </Link>

            <div className="flex items-center gap-8">
              <nav className="hidden md:flex items-center gap-6">
                <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Features
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Solutions
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  About
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </nav>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}