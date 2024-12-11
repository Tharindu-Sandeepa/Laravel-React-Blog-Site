import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Modal Component
const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        {children}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const [formData, setFormData] = useState({
    topic: '',
    content: '',
    description: '',
  });

  // Fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/blogs');
      setBlogs(response.data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Open update modal and populate form data
  const handleEditClick = (blog) => {
    setEditingBlog(blog);
    setFormData({
      topic: blog.topic,
      content: blog.content,
      description: blog.description,
    });
    setIsUpdateModalVisible(true);
  };

  // Submit update blog form
  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/blogs/${editingBlog.id}`, formData);
      setIsUpdateModalVisible(false);
      setEditingBlog(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">My Articals</h1>

        {/* Blog List */}
        <div className="space-y-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md flex items-center p-4">
                <img
                  src={blog.image || 'https://via.placeholder.com/80'}
                  alt={blog.topic}
                  className="w-20 h-20 rounded-sm object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">{blog.topic}</h3>
                  <p className="text-gray-600">{blog.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditClick(blog)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={async () => {
                      if (window.confirm('Are you sure you want to delete this blog?')) {
                        try {
                          await axios.delete(`http://localhost:8000/api/blogs/${blog.id}`);
                          fetchBlogs();
                        } catch (error) {
                          console.error('Error deleting blog:', error);
                        }
                      }
                    }}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No blogs available.</p>
          )}
        </div>

        {/* Update Modal */}
        <Modal
          isVisible={isUpdateModalVisible}
          onClose={() => {
            setIsUpdateModalVisible(false);
            setEditingBlog(null);
          }}
        >
          <h2 className="text-xl font-semibold mb-4">Update Blog</h2>
          <form onSubmit={handleUpdateFormSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Topic</label>
              <input
                type="text"
                name="topic"
                value={formData.topic}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Content</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => {
                  setIsUpdateModalVisible(false);
                  setEditingBlog(null);
                }}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Update
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default BlogList;