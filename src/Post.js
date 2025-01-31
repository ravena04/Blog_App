import React, { useState, useEffect } from 'react';

const Page = () => {
  const [greeting, setGreeting] = useState('');
  const [randomPost, setRandomPost] = useState('');

  // Array of random posts
  const posts = [
    "How to Find Inspiration for Your Next Blog Post",
    "10 Tips for Boosting Your Blogging Productivity",
    "Why Consistency is Key in Blogging",
    "The Power of Personalization in Blogging",
    "How Blogging Can Change Your Life"
  ];

  // Function to update random post
  useEffect(() => {
    const updateRandomPost = () => {
      const newPost = posts[Math.floor(Math.random() * posts.length)];
      setRandomPost(newPost);
    };

    updateRandomPost(); // Initial post update
    const interval = setInterval(updateRandomPost, 5000); // Change post every 5 seconds

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs once on mount

  // Dynamic greeting based on time
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning!');
    } else if (hours < 18) {
      setGreeting('Good Afternoon!');
    } else {
      setGreeting('Good Evening!');
    }
  }, []);

  return (
    <div className="page-container">
      <h1>Welcome to My Blog</h1>
      <div className="greeting">{greeting}</div>

      {/* Random Post */}
      <div className="random-post">
        <h2>Random Blog Ideas</h2>
        <p>{randomPost}</p>
      </div>

      {/* Life Lesson */}
      <div className="life-lesson">
        <h2>Life Lesson of the Day</h2>
        <p>“Success is not final, failure is not fatal: It is the courage to continue that counts.”</p>
      </div>

      {/* Quote of the Day */}
      <div className="quote-of-the-day">
        <h2>Quote of the Day</h2>
        <p>“The only way to do great work is to love what you do.” - Steve Jobs</p>
      </div>

      <style jsx>{`
        .page-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #f4f7fc;
          color: #333;
          padding: 40px;
          font-family: 'Arial', sans-serif;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          text-align: center;
          color: #2e3b4e;
        }

        .greeting {
          font-size: 2rem;
          margin-bottom: 20px;
          text-align: center;
          color: #00bfff;
        }

        .random-post, .life-lesson, .quote-of-the-day {
          background: #fff;
          padding: 20px;
          margin: 20px 0;
          border-radius: 12px;
          width: 80%;
          max-width: 600px;
          box-shadow: 0px 4px 15px rgba(0, 191, 255, 0.5); /* Bluish shadow */
          transition: all 0.3s ease-in-out;
        }

        .random-post:hover, .life-lesson:hover, .quote-of-the-day:hover {
          box-shadow: 0px 6px 20px rgba(0, 191, 255, 0.7); /* Stronger bluish glow on hover */
          transform: translateY(-5px);
        }

        h2 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          text-align: center;
          color: #333;
        }

        p {
          font-size: 1.2rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .page-container {
            padding: 20px;
          }

          h1 {
            font-size: 2.5rem;
          }

          .greeting {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
