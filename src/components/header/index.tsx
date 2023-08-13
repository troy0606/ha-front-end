import * as React from 'react';

interface props {
  backgroundColor: string,
  label?: string
}

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Website</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/heroes" className="text-gray-300 hover:text-white">
                Heroes
              </a>
            </li>
            <li>
              <a href="/fp" className="text-gray-300 hover:text-white">
                FP
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
