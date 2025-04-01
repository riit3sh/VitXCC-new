import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ClubList from './components/ClubList';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="App">
      <Navbar />
      <main>
        <section className="hero">
          <h1>VIT Clubs & Organizations</h1>
          <p>Discover and join various clubs at VIT University</p>
        </section>

        <section className="clubs-section">
          <div className="category-filters">
            <button
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Clubs
            </button>
            <button
              className={`category-btn ${activeCategory === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveCategory('tech')}
            >
              Technical
            </button>
            <button
              className={`category-btn ${activeCategory === 'cultural' ? 'active' : ''}`}
              onClick={() => setActiveCategory('cultural')}
            >
              Cultural
            </button>
            <button
              className={`category-btn ${activeCategory === 'arts' ? 'active' : ''}`}
              onClick={() => setActiveCategory('arts')}
            >
              Arts
            </button>
            <button
              className={`category-btn ${activeCategory === 'ngo' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ngo')}
            >
              NGO
            </button>
            <button
              className={`category-btn ${activeCategory === 'core' ? 'active' : ''}`}
              onClick={() => setActiveCategory('core')}
            >
              Core
            </button>
          </div>
          <ClubList category={activeCategory} />
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App; 