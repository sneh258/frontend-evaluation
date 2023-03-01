import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card_header from '../../components/cards/card_header/Card_header';
import Seats from '../../components/seats/Seats';

export default function Seat() {
  return (
    <div>
      <Header />
      <Card_header />
      <Seats/>
      <Footer />
    </div>
  );
}
