import React from 'react';
import '../App.css'; // Import the CSS file

const Blogs = () => {
  // Sample blog post data (you can replace this with your actual blog data)
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'September 1, 2023',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      date: 'August 15, 2023',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
    },

    {
      id: 2,
      title: 'JavaScript Fundamentals',
      date: 'August 15, 2023',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas...',
    },
    
    // Add more blog post entries as needed
  ];

  return (
    <div className="blogs">
      <h1>Blogs</h1>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <h2>{post.title}</h2>
            <p className="date">{post.date}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
