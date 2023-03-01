import React from 'react';
import './card_header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

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
          <span>
            <FontAwesomeIcon icon={faCircleDot} />
            All
          </span>
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Registered
          </span>
        </div>
        <div className="option2">
          <span>
            Bookmarked <FontAwesomeIcon icon={faCircle} />
          </span>
          <span className='seats'>
            Seats Available <FontAwesomeIcon icon={faCircle} />
          </span>
        </div>
      </div>
    </div>
  );
}
