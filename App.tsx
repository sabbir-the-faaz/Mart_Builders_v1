
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Tenders from './pages/Tenders';
import Compliance from './pages/Compliance';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <AIAssistant />
      </Layout>
    </Router>
  );
};

export default App;
