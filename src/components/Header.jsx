import React from 'react';

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <button className="md:hidden" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <div className="flex-1 mx-4 max-w-lg">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405C18.79 15.21 18 13.702 18 12V8c0-3.314-2.686-6-6-6S6 4.686 6 8v4c0 1.702-.79 3.21-2.595 3.595L2 17h5m5 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
