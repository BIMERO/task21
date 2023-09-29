import React from 'react'
import { Sidebar } from './Sidebar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home } from '../Pages/Home';
import { Chart } from '../Pages/Chart';


export const Layout = () => {
  return (
    <BrowserRouter>
        <main className='flex'>
          <Sidebar/>
          <div className='ml-28 py-8 w-full pr-9'> 
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='chart' element={<Chart/>}/>
            </Routes>
          </div>
      </main>
    </BrowserRouter>
  );
};