import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card_header from '../../components/cards/card_header/Card_header';
import EventDetail from '../../components/eventDetail/EventDetail';


export default function EventDetails() {
  return (
    <div>
      <Header />
      <Card_header />
      <EventDetail/>
      <Footer />
    </div>
  );
}
