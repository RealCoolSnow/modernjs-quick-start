import React from 'react';
import intl from 'react-intl-universal';
import { Link } from '@modern-js/runtime/router';
import Header from '@/components/common/Header';
import LocaleSwitch from '@/components/LocaleSwitch';
import Footer from '@/components/common/Footer';
import earthSvg from '@/assets/svg/earth.svg';

const About = () => (
  <div className="flex flex-col items-center">
    <Header title={intl.get('about')} />
    <LocaleSwitch />
    <div className="mt-6">
      <Link to="/">
        <span className="text-blue-500">{intl.get('home')}</span>
      </Link>
      <span className="p-1">|</span>
      <span>{intl.get('about')}</span>
    </div>
    <img src={earthSvg} className="mt-4" />
    <h1 className="font-sans text-lg text-gray-800 text-center">
      {intl.get('about_msg')}
    </h1>
    <Footer />
  </div>
);
export default About;
