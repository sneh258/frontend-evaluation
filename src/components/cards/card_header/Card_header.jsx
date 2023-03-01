import React from 'react';
import './card_header.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
// import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function Card_header() {
  const navigate = useNavigate();
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
          <span className="all" onClick={() => navigate('/')}>
            <FontAwesomeIcon icon={faCircle} />
            All
          </span>
          <span className="register" onClick={() => navigate('/register')}>
            <FontAwesomeIcon icon={faCircle} />
            Registered
          </span>
        </div>
        <div className="option2">
          <span className="bookmark" onClick={() => navigate('/bookmark')}>
            Bookmarked <FontAwesomeIcon icon={faCircle} />
          </span>
          <span className="seats" onClick={() => navigate('/seat')}>
            Seats Available <FontAwesomeIcon icon={faCircle} />
          </span>
        </div>
      </div>
    </div>
  );
}
