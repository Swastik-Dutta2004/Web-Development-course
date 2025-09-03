import React from 'react';

const Footer = () => {
  // SVG icons for social links and features
  const LockIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );

  const HeartIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );

  const GithubIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const TwitterIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );

  const LinkedinIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const ShieldIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );

  const KeyIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-emerald-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/2 left-1/2 w-16 h-16 bg-green-300 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-3 rounded-xl shadow-xl">
                  <LockIcon className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-3xl tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">&lt;PA</span>
                  <span className="text-white">ssMana</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Ge/&gt;</span>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Secure your digital life with our advanced password management solution. 
                Generate, store, and manage all your passwords with military-grade encryption.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <ShieldIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">256-bit Encryption</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <KeyIcon className="w-5 h-5" />
                  <span className="text-sm font-medium">Zero-Knowledge</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </h3>
              <ul className="space-y-3">
                {['Home', 'Features', 'Security', 'Pricing', 'Support', 'Downloads'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6 relative">
                Support
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              </h3>
              <ul className="space-y-3">
                {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'Security Guide', 'API Documentation'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">Stay Security Aware</h3>
                <p className="text-gray-300">Get the latest security tips and product updates delivered to your inbox.</p>
              </div>
              <div className="flex space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent w-64"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Made by section with enhanced styling */}
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <span className="text-gray-400">Made with</span>
                <HeartIcon className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-gray-400">by</span>
                <div className="relative group">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 font-bold text-xl tracking-wide">
                    SWA
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                  <GithubIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                  <TwitterIcon className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                  <LinkedinIcon className="w-6 h-6" />
                </a>
              </div>

              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} PassManage. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;