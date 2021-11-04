import React from 'react';
import intl from 'react-intl-universal';
import { Link } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import LocaleSwitch from '../components/LocaleSwitch';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Counter from '@/components/Counter';
import countModel from '@/store/models/count-model';
import LocalCounter from '@/components/LocalCounter';

const Index = () => {
  const [countState] = useModel(countModel);
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
        <div className="m-2 text-red-500">{countState.value}</div>
        <Counter />
        <LocalCounter />
        <div className="border-2 px-1 m-2 text-blue-400">mock test</div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
