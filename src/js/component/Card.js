import React from 'react';

function Card({ title, text, imgSrc }) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <img src={imgSrc} className="card-img-top" alt="..." style={{ height: '325px', objectFit: 'cover' }} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
