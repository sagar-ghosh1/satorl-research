import React from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';

const Main = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;