import React from 'react';
import {
  BrowserRouter,
  Routes, Route
} from 'react-router-dom';

// pages
import Chat from './pages/Chat';
import Welcome from './pages/Welcome';

// components
import TopBar from './components/TopBar';

// stylesheet
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <TopBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Welcome}></Route>
          <Route path='/chat' Component={Chat}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
