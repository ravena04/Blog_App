import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [externalLink, setExternalLink] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setAuthor(window.localStorage.getItem('author'));
    console.log(window.localStorage.getItem('author'));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author || !category) {
      alert('Please fill all the required fields');
      return;
    }

    const blogData = {
      title,
      content,
      author,
      category,
      externalLink,
    };

    try {
      const response = await fetch('http://localhost:4000/blogs/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('There was an error creating your blog. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Create Blog</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              style={styles.textarea}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={styles.select}
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Education">Education</option>
              <option value="Business">Business</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>External Link (optional)</label>
            <input
              type="text"
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Post Blog</button>
        </form>
      </div>
    </div>
  );
};

// ✅ Inline CSS Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f7fc',
  },
  formContainer: {
    background: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 191, 255, 0.5)', // Bluish shadow effect
    width: '90%',
    maxWidth: '500px',
  },
  heading: {
    textAlign: 'center',
    color: '#2e3b4e',
    marginBottom: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  },
  textarea: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '100px',
  },
  select: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '12px',
    border: 'none',
    background: '#00bfff',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
  },
};

export default CreatePost;
