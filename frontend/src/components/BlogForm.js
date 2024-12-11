import axios from 'axios';
import React, { useState } from 'react';

const BlogForm = ({ fetchBlogs }) => {
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert('Please upload an image!');
      return;
    }

    const formData = new FormData();
    formData.append('topic', topic);
    formData.append('content', content);
    formData.append('description', description);
    formData.append('image', imageFile);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/addblog',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      console.log(response.data);
      alert('Blog created successfully');
      setTopic('');
      setContent('');
      setDescription('');
      setImageFile(null);
      fetchBlogs();
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred!');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Create a New Blog</h2>

        <div>
          <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">Topic</label>
          <input
            id="topic"
            type="text"
            placeholder="Enter blog topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-gray-700 font-medium mb-2">Content</label>
          <textarea
            id="content"
            placeholder="Enter blog content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Upload Image</label>
          <input
            id="image"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter a short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;