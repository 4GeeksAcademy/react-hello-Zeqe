import React from 'react';
import Navbar from './Navbar'; 
import Jumbotron from './Jumbotron'; 
import Card from './Card'; 
import Footer from './Footer';

function App() {
  const cardsData = [
    { title: "Card Title 1", text: "This is a description.", imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title 2", text: "This is a description.", imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title 3", text: "This is a description.", imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title 4", text: "This is a description.", imgSrc: "https://via.placeholder.com/500x325" }
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container-fluid px-4 mt-5">
        <Jumbotron />
        <div className="row">
          {cardsData.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              text={card.text}
              imgSrc={card.imgSrc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
