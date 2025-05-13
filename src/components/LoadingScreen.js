import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/loading.json';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <Lottie animationData={animationData} loop={true} />
      <h2>Loading Undangan Wisuda...</h2>
    </div>
  );
};

export default LoadingScreen;