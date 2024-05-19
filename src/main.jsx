import React from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './constants/mock';
import { Restaurants } from './components/restaurants/component.jsx';
import { Header } from './components/header/component.jsx';
import { Footer } from './components/footer/component.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
        <>
          <Header />
          <Restaurants restaurants={restaurants} />
          <Footer />
        </>
       );
