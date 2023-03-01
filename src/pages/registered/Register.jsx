import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card_header from '../../components/cards/card_header/Card_header';
import Registered from '../../components/Registered/Registered';
export default function Register() {
  return (
    <div>
      <Header />
      <Card_header />
      <Registered />
      <Footer />
    </div>
  );
}
