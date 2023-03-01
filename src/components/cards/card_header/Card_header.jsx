import React from 'react';
import './card_header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function Card_header() {
  return (
    <div className="actions">
      <div className="action">
        <div className="filter">
          filter <FontAwesomeIcon icon={faFilter} />
        </div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type={'text'} placeholder="search" />
        </div>
      </div>
      <div className="filter_options">
        <div className="option1">
          <FontAwesomeIcon icon="fa-light fa-circle" />
          <span>All</span>
          <span>Registered</span>
        </div>
        <div className="option2">
          <span>Bookmarked</span>
          <span>Seats Available</span>
        </div>
      </div>
    </div>
  );
}
