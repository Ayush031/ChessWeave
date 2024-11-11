import React, { useEffect, useState } from 'react';
import './loader.css';

export default function ChessLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ChessLoader />;
  }
  return (
    <div className="chess-loader-container">
      <div className="chess-loader">
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
        <div className="chess-loader-row">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="chess-loader-square"></div>
          ))}
        </div>
      </div>
    </div>
  );
}