// Home.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-white flex flex-col">
      
      {/* Navigation Bar */}
      <nav className="p-4 bg-slate-700 flex justify-center space-x-8">
        
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Poll Master
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Create polls and view live results instantly.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/project/pollmaster/createPoll"
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Create a Poll
          </Link>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-slate-700 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Poll Master. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
