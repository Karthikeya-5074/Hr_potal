import React from 'react';
import { Menu, Bell } from 'lucide-react';

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-900 sticky top-0 z-10 shadow-sm">
      <button className="md:hidden p-2 rounded hover:bg-teal-100 dark:hover:bg-gray-800 transition" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex-1 mx-4 max-w-lg">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Notifications" className="p-2 rounded hover:bg-teal-100 dark:hover:bg-gray-800 transition">
          <Bell className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
