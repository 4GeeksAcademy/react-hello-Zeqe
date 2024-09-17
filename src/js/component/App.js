import React from 'react';
import Navbar from './Navbar.js'; 
import Jumbotron from './Jumbotron.js'; 
import CardsList from './Card.js'; 
import Footer from './Footer.js';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container mt-5">
        <Jumbotron />
        <CardsList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
