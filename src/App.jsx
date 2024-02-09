import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import Resume from './components/Resume';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';

export default function App() {
  return (
    <Router>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
