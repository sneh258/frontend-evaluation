import React from 'react';
import './card_header.css';

export default function Card_header() {
  return (
    <div className="actions">
      <span className="filter">FILTER</span>
      <div className="search">
        {/* <input className="search_event" type='text' placeholder='hi'>Event Name</input> */}
        <span>search</span>
      </div>
      <div className="filter_options">
        <span>All</span>
        <span>Registered</span>
        <span>Bookmarked</span>
        <span>Seats Available</span>
      </div>
    </div>
  );
}
