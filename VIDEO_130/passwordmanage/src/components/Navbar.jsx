import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SVG icons without any external libraries
  const LockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  const MenuIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );

  const XIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );

  const ShieldIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const UserIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  const SettingsIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.23.46a2 2 0 0 0 .73 2.73l.15.08a2 2 0 0 1 1 1.74v.52a2 2 0 0 1-1 1.74l-.15.08a2 2 0 0 0-.73 2.73l.23.46a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73v.18a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.23-.46a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.52a2 2 0 0 1 1-1.74l.15-.08a2 2 0 0 0 .73-2.73l-.23-.46a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <nav className='bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-2xl border-b border-slate-700/50 backdrop-blur-sm'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className='flex items-center space-x-3'>
            <div className='bg-gradient-to-br from-green-400 to-emerald-600 p-2 rounded-lg shadow-lg'>
              <LockIcon className='w-6 h-6 text-white' />
            </div>
            <div className='logo font-bold text-2xl tracking-tight'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'>&lt;PA</span>
              <span className='text-white'>ssMana</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'>Ge/&gt;</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            <a
              href="#"
              className='flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 group'
            >
              <ShieldIcon className='w-4 h-4 group-hover:text-green-400 transition-colors' />
              <span className='font-medium'>Home</span>
            </a>
            <a
              href="#"
              className='flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 group'
            >
              <UserIcon className='w-4 h-4 group-hover:text-green-400 transition-colors' />
              <span className='font-medium'>Contact</span>
            </a>
            <a
              href="#"
              className='flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:scale-105 group'
            >
              <SettingsIcon className='w-4 h-4 group-hover:text-green-400 transition-colors' />
              <span className='font-medium'>About</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-colors'
            >
              {isMenuOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-slate-700/50'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 backdrop-blur-sm'>
              <a
                href="#"
                className='flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group'
              >
                <ShieldIcon className='w-5 h-5 group-hover:text-green-400 transition-colors' />
                <span className='font-medium'>Home</span>
              </a>
              <a
                href="#"
                className='flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group'
              >
                <UserIcon className='w-5 h-5 group-hover:text-green-400 transition-colors' />
                <span className='font-medium'>Contact</span>
              </a>
              <a
                href="#"
                className='flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 group'
              >
                <SettingsIcon className='w-5 h-5 group-hover:text-green-400 transition-colors' />
                <span className='font-medium'>About</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;