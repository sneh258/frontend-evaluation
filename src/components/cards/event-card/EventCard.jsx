/* eslint-disable react/prop-types */
import React from 'react';
import './eventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

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
        <div className="venue">
          <span>VENUE: </span>
          {post.venue}
        </div>
        <div className="date"><span>DATE:</span>{post.datetime}</div>
        <div className="show">
          <div className="register">register</div>
          <div className="bookmark">
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>
      </div>
    </div>
  );
}
