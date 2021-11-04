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
import logoImg from '@/assets/images/logo.png';
import { helloGet } from '@/api/hello';

const Index = () => {
  const [countState] = useModel(countModel);
  const onHttpTest = async () => {
    const res = await helloGet();
    // eslint-disable-next-line no-console
    console.log('helloGet', res);
  };
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
        <div className="border-2 px-1 m-2 text-blue-400" onClick={onHttpTest}>
          http test
        </div>
      </div>
      <img src={logoImg} className="w-16" />
      <Footer />
    </div>
  );
};

export default Index;
