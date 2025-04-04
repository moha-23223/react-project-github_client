import React from 'react';
import './Loader.css'; // import styles (you can inline them too if you want)

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="spinner" />
    </div>
  );
};

export default Loader;
