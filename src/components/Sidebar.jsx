import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, ClipboardList, FileText } from 'lucide-react';

const links = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: Home,
  },
  {
    to: '/employees',
    label: 'Employees',
    icon: Users,
  },
  {
    to: '/onboarding',
    label: 'Onboarding',
    icon: ClipboardList,
  },
  {
    to: '/documents',
    label: 'Documents',
    icon: FileText,
  },
];

function Sidebar({ isOpen, toggle }) {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:sticky md:top-0 z-20 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 w-64 h-screen shadow-xl transition-all duration-300`}
    >
      <div className="p-4 text-2xl font-bold border-b border-gray-200 dark:border-gray-700">HR Portal</div>
      <nav className="mt-4 flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `relative flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-teal-100 dark:hover:bg-gray-800 transition-all duration-300 ${
                isActive ? 'bg-teal-500 text-white dark:bg-teal-600 font-semibold before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-blue-500' : ''
              }`
            }
            onClick={toggle}
          >
            {React.createElement(link.icon, { className: 'w-5 h-5' })}
            <span className="flex-1">{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
