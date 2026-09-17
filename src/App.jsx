import React, { useState } from 'react';
import Home from './pages/index';
import SmoothScroll from './components/scroll/SmoothScroll';
import Loading from './components/loading/loading';
import ScrollTopButton from './components/scrollTop/ScrollTopButton';
import CustomCursor from './components/cursor/CustomCursor';

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      <CustomCursor />
      <Loading onFinish={() => setLoadingDone(true)} />
      <SmoothScroll>
        <Home />
      </SmoothScroll>
      {loadingDone && <ScrollTopButton />}
    </>
  );
};

export default App;
