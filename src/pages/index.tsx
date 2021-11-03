import React, { useState } from 'react';
import intl from 'react-intl-universal';
import { Link } from '@modern-js/runtime/router';
import LocaleSwitch from '../components/LocaleSwitch';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center">
      <Header title={intl.get('home')} />
      <LocaleSwitch />
      <div className="mt-6">
        <span>{intl.get('home')}</span>
        <span className="p-1">|</span>
        <Link to="/about">
          <span className="text-blue-500">{intl.get('about')}</span>
        </Link>
      </div>
      <div className="mt-6">
        <div
          className="border-2 px-1 m-2 text-red-400"
          onClick={() => setCount(count + 1)}>
          counter - {count}
        </div>
        <div className="border-2 px-1 m-2 text-blue-400">mock test</div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
