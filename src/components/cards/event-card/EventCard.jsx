/* eslint-disable react/prop-types */
import React from 'react';
import './eventCard.css';

export default function EventCard({post}) {
  return (
    <div className="container">
      <div className="image">
        <img src={post.imgUrl} alt="show" />
      </div>
      <div className="card_content">
        <div className="title">{post.name}</div>
        <div className="description">
          <p>{post.description}</p>
        </div>
        <div className="venue">{post.venue}</div>
        <div className="date">{post.datetime}</div>
        <div className="show">
          <div className="register">register</div>
          <i className="fa-regular fa-bookmark"></i>
        </div>
      </div>
    </div>
  );
}
