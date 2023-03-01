import React from 'react';
import EventCard from '../event-card/EventCard';
import './eventCards.css';
import { useState, useEffect } from 'react';
import makeRequest from '../../../utils/makeRequest/makeRequest';
import { GET_EVENT_DATA } from '../../../constants/apiEndPoints';

export default function EventCards() {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_EVENT_DATA)
      .then((respone) => setEventData(respone))
      .catch((e) => {
        setError(e.message);

      });
  }, []);

  if (error) {
    return (
      <div className="eventDataError">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="main_container">
      {eventData.map((post) => (
        <EventCard key={post.id} post={post} />
      ))}
    </div>
  );
}
