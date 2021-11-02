import React from 'react';
import intl from 'react-intl-universal';
import LocaleSwitch from '../components/LocaleSwitch';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => (
  <div>
    <Header title={intl.get('home')} />
    <LocaleSwitch />
    <Footer />
  </div>
);

export default Index;
