import React, { useEffect, useState } from 'react';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`http://localhost:4000/myblogs/${window.localStorage.getItem('author')}`);
      const data = await response.json();
      setBlogs(data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();
      alert(result.message); // Show message to user
      setBlogs(blogs.filter(blog => blog._id !== id)); // Remove deleted blog from state
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const updateBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/blogs/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTitle, content: newContent }),
      });

      const result = await response.json();
      alert(result.message); // Show message to user

      // Update the blog in the state
      setBlogs(blogs.map(blog => (blog._id === id ? { ...blog, title: newTitle, content: newContent } : blog)));
      setEditingBlog(null); // Close the editing mode
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', fontFamily: 'Roboto, sans-serif' }}>My Blogs</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {blogs.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {blogs.map((blog) => (
              <li
                key={blog._id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '15px',
                  marginBottom: '15px',
                  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  position: 'relative',
                }}
              >
                <h3 style={{ margin: '0 0 10px', color: '#007bff', fontFamily: 'Roboto, sans-serif' }}>{blog.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.5', fontFamily: 'Roboto, sans-serif' }}>
                  {blog.content}
                </p>
                <p style={{ fontStyle: 'italic', color: '#888', fontFamily: 'Roboto, sans-serif' }}>
                  {blog.category}
                </p>
                <p style={{ fontWeight: 'bold', color: '#444', fontFamily: 'Roboto, sans-serif' }}>
                  Author: {blog.author}
                </p>
                <p style={{ fontSize: '14px', color: '#666', fontFamily: 'Roboto, sans-serif' }}>
                  Posted on: {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                {/* Update Button */}
                <button
                  onClick={() => {
                    setEditingBlog(blog._id);
                    setNewTitle(blog.title);
                    setNewContent(blog.content);
                  }}
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '10px',
                    right: '80px',
                  }}
                >
                  Update
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteBlog(blog._id)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: '#777', fontSize: '18px' }}>No blogs found</p>
        )}
      </div>

      {/* Edit Blog Modal */}
      {editingBlog && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            width: '400px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}>
            <h3>Edit Blog</h3>
            <input
              type="text"
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontFamily: 'Roboto, sans-serif',
              }}
            />
            <textarea
              placeholder="Content"
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              rows="5"
              style={{
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontFamily: 'Roboto, sans-serif',
              }}
            />
            <div style={{ textAlign: 'right' }}>
              <button
                onClick={() => updateBlog(editingBlog)}
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingBlog(null)}
                style={{
                  backgroundColor: 'gray',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBlogs;
