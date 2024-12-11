import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blogs/${blogId}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 shadow-md rounded-lg">
      {/* Blog Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">{blog.topic}</h1>
      </div>

      {/* Blog Image */}
      <div className="mb-8">
        <img
          src={blog.image}
          alt={blog.topic}
          className="w-full h-96 object-cover rounded-lg shadow-sm"
        />
      </div>

      {/* Blog Details */}
      <div className="text-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{blog.description}</h2>
        <p className="leading-relaxed text-lg">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetailPage;