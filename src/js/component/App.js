import React from 'react';
import Navbar from './Navbar.js'; 
import Jumbotron from './Jumbotron.js'; 
import Card from './Card.js'; 
import Footer from './Footer.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-5">
        <Jumbotron />
        <div className="row">
          <Card title="Card Title 1" text="This is a short description." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card Title 2" text="This is a short description." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card Title 3" text="This is a short description." imgSrc="https://via.placeholder.com/500x325" />
          <Card title="Card Title 4" text="This is a short description." imgSrc="https://via.placeholder.com/500x325" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
