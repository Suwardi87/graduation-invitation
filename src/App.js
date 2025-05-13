import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import GraduationDetails from './components/GraduationDetails';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : (
        <>
          <HeroSection />
          <GraduationDetails />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;