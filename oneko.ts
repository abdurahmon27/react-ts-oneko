import React, { useEffect } from 'react';

const Oneko: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/oneko.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Oneko;
