import React from 'react';

function Card({ title, text, imgSrc }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
}

function CardsList() {
  const cardsData = [
    { title: "Card Title", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nulla aliquid animi culpa aspernatur magni numquam a fugit neque! Animi distinctio deserunt explicabo eaque perspiciatis, recusandae maxime ex tempora doloremque." , imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nulla aliquid animi culpa aspernatur magni numquam a fugit neque! Animi distinctio deserunt explicabo eaque perspiciatis, recusandae maxime ex tempora doloremque." , imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nulla aliquid animi culpa aspernatur magni numquam a fugit neque! Animi distinctio deserunt explicabo eaque perspiciatis, recusandae maxime ex tempora doloremque." , imgSrc: "https://via.placeholder.com/500x325" },
    { title: "Card Title", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nulla aliquid animi culpa aspernatur magni numquam a fugit neque! Animi distinctio deserunt explicabo eaque perspiciatis, recusandae maxime ex tempora doloremque." , imgSrc: "https://via.placeholder.com/500x325" }
  ];

  return (
    <div className="row">
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} imgSrc={card.imgSrc} />
      ))}
    </div>
  );
}

export default CardsList;
