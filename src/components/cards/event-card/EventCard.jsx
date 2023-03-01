/* eslint-disable react/prop-types */
import React from 'react';
import './eventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment-timezone';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function EventCard({ post }) {
  // const [bookmark, setBookmark] = useState();
  const time = moment(post.datetime);
  const dateTime = time.tz(post.timezone).format('DD MMM YYYY HH:mm z');

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
        <div className="date">
          <span>DATE:</span>
          {dateTime}
        </div>
        <div className="show">
          <div className="register">
            <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#42f551" />
          </div>
          <div className="bookmark">
            <FontAwesomeIcon icon={faBookmark} color='red'/>
          </div>
        </div>
      </div>
    </div>
  );
}
