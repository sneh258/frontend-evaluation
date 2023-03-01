import React from 'react';
import EventCard from '../cards/event-card/EventCard';
import { useState, useEffect } from 'react';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { GET_EVENT_DATA } from '../../constants/apiEndPoints';
import './seats.css';

export default function Seats() {
  const [eventData, setEventData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    makeRequest(GET_EVENT_DATA)
      .then((response) => {
        if (response) {
          const data = response.filter((x) => x.areSeatsAvailable === true);
          setEventData(data);
        }
      })
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

  return eventData.length !== 0 ? (
    <div className="main_container">
      {eventData.map((post) => (
        <EventCard key={post.id} post={post} index={post.id} />
      ))}
    </div>
  ) : (
    <div className="dataLoader">
      <p>Loading...</p>
    </div>
  );
}
