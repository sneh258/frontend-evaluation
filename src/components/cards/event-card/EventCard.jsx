/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react';
import './eventCard.css';
import EventDetail from '../../eventDetail/EventDetail';
import makeRequest from '../../../utils/makeRequest/makeRequest';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import {
  GET_BY_EVENT_DATA,
  UPDATE_EVENT_DATA,
} from '../../../constants/apiEndPoints';

export default function EventCard({ post }) {
  const [isBookmarked, setBookmark] = useState(true);
  const [isRegistered, setRegister] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_BY_EVENT_DATA(post.id)).then((response) => {
      setBookmark(response.isBookmarked);
      setRegister(response.isRegistered);
    });
  }, []);

  const handleBookmark = async () => {
    console.log(post.id);
    try {
      await makeRequest(UPDATE_EVENT_DATA(post.id), {
        data: { isBookmarked: !isBookmarked },
      });
      setBookmark(!isBookmarked);
    } catch (error) {
      setError(error.message);
    }
  };
  const handleRegister = async () => {
    console.log(post.id);
    try {
      await makeRequest(UPDATE_EVENT_DATA(post.id), {
        data: { isRegistered: !isRegistered },
      });
      setRegister(!isRegistered);
    } catch (error) {
      setError(error.message);
    }
  };

  const time = moment(post.datetime);
  const dateTime = time.tz(post.timezone).format('DD MMM YYYY HH:mm z');

  return (
    <div className="container">
      <div className="image">
        <img
          src={post.imgUrl}
          alt="show"
        //   onClick={() => <EventDetail post={post.id} />}
        />
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
          <div
            className="register"
            onClick={() => {
              handleRegister();
            }}
          >
            {post.isRegistered && post.areSeatsAvailable ? (
              <div>
                <FontAwesomeIcon icon={faCheckCircle} color="green" />
                Registered
              </div>
            ) : (
              !post.areSeatsAvailable && (
                <div>
                  <FontAwesomeIcon icon={faCircleXmark} color='yellow' />
                  No Seats Available
                </div>
              )
            )}
          </div>
          <div
            className="bookmark"
            onClick={() => {
              handleBookmark();
            }}
          >
            {isBookmarked ? (
              <FontAwesomeIcon icon={faBookBookmark} color="red" />
            ) : (
              <FontAwesomeIcon icon={faBookmark} color="red" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
