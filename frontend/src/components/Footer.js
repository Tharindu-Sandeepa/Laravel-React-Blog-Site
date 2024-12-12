import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
   
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-blue-500">DevWrite</h1>
          <p className="text-gray-400">Empowering your creativity.</p>
        </div>

       
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
          <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
          <a href="/myblogs" className="hover:text-blue-400 transition duration-300">My Blogs</a>
          <a href="/addblog" className="hover:text-blue-400 transition duration-300">Add Blog</a>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;