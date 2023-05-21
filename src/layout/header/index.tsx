import * as React from 'react';

interface props {
  backgroundColor: string,
  label?: string
}

const Header = ({backgroundColor, label}: props) => {
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
              <a href="/about" className="text-gray-300 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
