import React from 'react';
import intl from 'react-intl-universal';
import Header from '@/components/Header';

const About = () => (
  <div>
    <Header title={intl.get('about')} />
    <div>about</div>
  </div>
);
export default About;
