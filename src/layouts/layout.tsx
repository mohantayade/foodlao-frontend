import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomePage from '@/pages/HomePage';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
  showHero?: boolean;
};

function Layout({ children, showHero = false }: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      {showHero && <Hero/>}
      <div className='container mx-auto flex-1 py-10'>{children}</div>
      <Footer/>
    </div>
  );
}

export default Layout;