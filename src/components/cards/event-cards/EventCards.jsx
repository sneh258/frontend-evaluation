import React from 'react';
import EventCard from '../event-card/EventCard';
import { mockData } from '../../../mockData/mockdata';
import './eventCards.css';

export default function EventCards() {
  const data = mockData;

  return (
    <div className='main_container'>
      {data.map((post) => (
        <EventCard key={post.id} post={post} />
      ))}
    </div>
  );
}
