import React from 'react';
import Home from './pages/index';
import SmoothScroll from './components/scroll/SmoothScroll';

const App = () => {
  return (
    <SmoothScroll>
      <Home />
    </SmoothScroll>
  );
};

export default App;
