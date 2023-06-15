import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="shadow-lg flex justify-center items-center py-4 px-8 bg-gray-100">
      <div className="flex items-center space-x-2">
        <Link 
          href="/" 
          className="text-2xl font-bold no-underline text-black">
          Password Generator
        </Link>
      </div>
    </header>
  );
}

export default Header;
