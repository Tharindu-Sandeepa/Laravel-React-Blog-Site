import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const getAllBlogs = async () => {
  return axios.get(`${API_BASE_URL}/blogs`);
};

export const createBlog = async (blogData) => {
  return axios.post(`${API_BASE_URL}/addblog`, blogData);
};

export const deleteBlog = async (id) => {
  return axios.delete(`${API_BASE_URL}/blogs/${id}`);
};

export const updateBlog = (id, blogData) => {
    const formData = new FormData();
    formData.append('topic', blogData.topic);
    formData.append('content', blogData.content);
    formData.append('description', blogData.description);
  
    if (blogData.imageFile) {
      formData.append('image', blogData.imageFile);
    }
  
    return axios.put(`${API_BASE_URL}/blogs/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };