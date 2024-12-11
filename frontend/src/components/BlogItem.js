import React from 'react';
import { deleteBlog } from '../services/blogService';

const BlogItem = ({ blog, fetchBlogs, onUpdateClick }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(blog.id);
        fetchBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        alert('Failed to delete the blog. Please try again.');
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{blog.topic}</h3>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Description:</span> {blog.description}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Content:</span> {blog.content}
      </p>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Image:</span>
        <div className="mt-2">
          <img
            src={blog.image}
            alt={blog.topic}
            className="max-w-xs rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Delete
        </button>
        <button
          onClick={() => onUpdateClick(blog)}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default BlogItem;