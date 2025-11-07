import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './src/ShareElements/Navbar';
import Footer from './src/ShareElements/Footer';



const MainOutlet = () => {
  return (
    <div className='w-full'>
             <Navbar></Navbar>
             <Outlet></Outlet>
             <Footer></Footer>

    </div>
  );
}

export default MainOutlet;
