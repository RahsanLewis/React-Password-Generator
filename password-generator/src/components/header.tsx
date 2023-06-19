import React from 'react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-gray-200 text-black border border-gray-300 shadow-xl py-6 px-4">
      <div className="flex justify-around items-center">
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
