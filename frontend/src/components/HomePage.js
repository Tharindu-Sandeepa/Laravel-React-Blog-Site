import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/blogs');
      setBlogs(response.data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-green-600 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
       
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Explore the Latest Blogs
        </h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleCardClick(blog.id)}
                className="bg-white bg-opacity-70 backdrop-blur-lg rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 cursor-pointer"
              >
               
                <img
                  src={blog.image}
                  alt={blog.topic}
                  className="w-full h-52 object-cover rounded-t-lg"
                />
             
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 truncate">{blog.topic}</h3>
                  <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                    {blog.description || "Click to read more."}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-200">
              No blogs available. Stay tuned for updates!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;