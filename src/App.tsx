import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './layout/header'
import Footer from './layout/footer'

export default function App () {
  return (
    <div className="App">
      <Header backgroundColor='blue'/>
      <Outlet />
      <Footer/>
    </div>
  );
}
