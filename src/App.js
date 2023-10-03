import React, { useState, useEffect } from 'react';

function AccordionItem({ user, posts, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    onToggle(user.id);
  };

  return (
    <>
    <div className="accordion-item">
      <button className="accordion-button" onClick={handleToggle}>
        {user.name} - {user.email}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </>
  );
}

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [expandedUser, setExpandedUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleToggle = (userId) => {
    if (expandedUser === userId) {
      setExpandedUser(null);
    } else {
      setExpandedUser(userId);
    }
  };

  return (
    <div className="accordion">
      <h1 className="title">REACT ASSIGNMENT</h1>
      {users.map((user) => (
        <AccordionItem
          key={user.id}
          user={user}
          posts={posts.filter((post) => post.userId === user.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default App;

