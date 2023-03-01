import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Card_header from '../../components/cards/card_header/Card_header';
import Bookmarked from '../../components/bookmarkedCards/Bookmarked';

export default function Bookmark() {
  return (
    <div>
      <Header />
      <Card_header />
      <Bookmarked />
      <Footer />
    </div>
  );
}
