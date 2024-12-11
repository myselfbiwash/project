import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}