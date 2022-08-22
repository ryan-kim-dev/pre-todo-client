import React from 'react';
import GlobalStyle from './GlobalStyle';
import Home from './pages/Home';
import UploadForm from './pages/UploadForm';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Links from './components/Links';
import Require from './pages/Require';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Links />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadForm />} />
        <Route path="/get" element={<Require />} />
      </Routes>
    </div>
  );
};

export default App;
