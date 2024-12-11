import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BlogDetailPage from './components/BlogDetailPage';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myblogs" element={<BlogList />} />
          <Route path="/addblog" element={<BlogForm />} />
          <Route path="/blog/:blogId" element={<BlogDetailPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;