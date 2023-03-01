/* eslint-disable react/prop-types */
import React from 'react';
import EventCard from '../cards/event-card/EventCard';
import { useState, useEffect } from 'react';
import makeRequest from '../../utils/makeRequest/makeRequest';
import { GET_BY_EVENT_DATA } from '../../constants/apiEndPoints';

export default function EventDetail() {
  const [eventData, setEventData] = useState([]);
  //   const [error, setError] = useState();

  useEffect(async () => {
    await makeRequest(GET_BY_EVENT_DATA()).then((response) => {
      setEventData(response);
    });
  }, []);

  //   if (error) {
  //     return (
  //       <div className="eventDataError">
  //         <p>{error}</p>
  //       </div>
  //     );
  //   }

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
