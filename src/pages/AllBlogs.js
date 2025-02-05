import React, { useEffect, useState } from 'react';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState({}); // Store comments per blog

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://blogapp-backend-ttjx.onrender.com/blogs');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch comments for a particular blog
  const fetchComments = async (blogId) => {
    try {
      const response = await fetch(`https://blogapp-backend-ttjx.onrender.com/blogs/${blogId}/comments`);
      const data = await response.json();
      setComments(prev => ({ ...prev, [blogId]: data.comments }));
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Handle comment submission
  const handleAddComment = async (blogId) => {
    if (newComment.trim() === '') return;
    
    try {
      const response = await fetch(`https://blogapp-backend-ttjx.onrender.com/blogs/${blogId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author: 'CurrentUser', content: newComment })
      });
      const result = await response.json();
      alert(result.message);
      fetchComments(blogId); // Refresh comments after adding a new one
      setNewComment(''); // Reset comment input
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  // Handle Like/Dislike
  const handleLikeDislike = async (blogId, type) => {
    try {
      const response = await fetch(`https://blogapp-backend-ttjx.onrender.com/blogs/${blogId}/${type}`, { method: 'POST' });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error handling like/dislike:', error);
    }
  };

  return (
    <div style={{ padding: '30px 20px', fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333', marginBottom: '40px', fontSize: '32px', fontWeight: '600' }}>All Blogs</h2>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
        {loading && (
          <p style={{ color: '#007bff', fontSize: '18px' }}>
            Loading blogs...
          </p>
        )}
        {error && (
          <p style={{ color: 'red', fontSize: '18px' }}>
            Error: {error}
          </p>
        )}
        {!loading && !error && blogs.length > 0 ? (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {blogs.map((blog) => (
              <li
                key={blog._id}
                style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '20px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  textAlign: 'left',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h3 style={{ color: '#007bff', margin: '0 0 15px', fontSize: '24px', fontWeight: '500' }}>{blog.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '16px' }}>{blog.content}</p>
                <p style={{ fontStyle: 'italic', color: '#888', fontSize: '14px' }}>{blog.category}</p>
                <p style={{ fontWeight: 'bold', color: '#444', fontSize: '16px' }}>Author: {blog.author}</p>
                <p style={{ fontSize: '14px', color: '#666' }}>
                  Posted on: {new Date(blog.createdAt).toLocaleDateString()}
                </p>

                {/* Like and Dislike buttons with emojis */}
                <div style={{ marginTop: '15px' }}>
                  <button onClick={() => handleLikeDislike(blog._id, 'like')} style={{ marginRight: '15px', fontSize: '24px', cursor: 'pointer', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', border: 'none' }}>
                    ❤️ {/* Heart emoji for Like */}
                  </button>
                  <button onClick={() => handleLikeDislike(blog._id, 'dislike')} style={{ fontSize: '24px', cursor: 'pointer', backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '5px', border: 'none' }}>
                    👎 {/* Thumbs-down emoji for Dislike */}
                  </button>
                </div>

                {/* Fetch and display comments */}
                <div style={{ marginTop: '30px' }}>
                  <h4 style={{ fontSize: '20px', color: '#444' }}>Comments</h4>
                  <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {comments[blog._id]?.map((comment) => (
                      <li key={comment._id} style={{ marginBottom: '10px' }}>
                        <p style={{ fontStyle: 'italic', color: '#555' }}>{comment.author}:</p>
                        <p style={{ color: '#444' }}>{comment.content}</p>
                      </li>
                    ))}
                  </ul>

                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    rows="3"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #ddd',
                      marginTop: '15px',
                      fontSize: '16px',
                      resize: 'none',
                    }}
                  />
                  <button
                    onClick={() => handleAddComment(blog._id)}
                    style={{
                      marginTop: '10px',
                      padding: '12px 25px',
                      cursor: 'pointer',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      borderRadius: '5px',
                      border: 'none',
                      fontSize: '16px',
                    }}
                  >
                    Add Comment
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          !loading && (
            <p style={{ color: '#777', fontSize: '18px' }}>
              No blogs found
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
