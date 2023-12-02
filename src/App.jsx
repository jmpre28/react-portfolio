import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Footer from './components/Footer';
import Resume from './components/Resume';

import 'semantic-ui-css/semantic.min.css';

export default function App() {
  return (
    <Router>
      <div className='main-content'>
        <Header />
        <Container text style={{ marginTop: '2em' }}>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}
