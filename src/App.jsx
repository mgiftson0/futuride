import { useState, useEffect } from 'react';
import Home from './views/Home';

function App() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 460);
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isScreenSmall) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100 text-center px-4">
        <p className="text-lg text-gray-800">
          This application is not accessible on screens smaller than 460px. Please use a larger device.
        </p>
      </div>
    );
  }

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
