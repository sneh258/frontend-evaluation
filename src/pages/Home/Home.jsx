import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card_header from '../../components/cards/card_header/Card_header';
import EventCards from '../../components/cards/event-cards/EventCards';

export default function Home() {
  return (
    <div>
      <Header />
      <Card_header />
      <EventCards />
      <Footer />
    </div>
  );
}
