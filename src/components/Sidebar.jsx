import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/employees', label: 'Employees' },
  { to: '/onboarding', label: 'Onboarding' },
  { to: '/documents', label: 'Documents' },
];

function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static z-20 bg-gray-800 text-white w-64 h-full transition-transform duration-200`}
    >
      <div className="p-4 text-xl font-bold">HR Portal</div>
      <nav className="mt-4 flex flex-col">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `py-2 px-4 hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`
            }
            onClick={toggle}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
