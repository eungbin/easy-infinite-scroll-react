import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from './components/Box';

interface Props {}

const App = ({  }: Props) => {
  const renderBoxList: number[] = Array.from({length: 50}, () => 0);
  const target = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    observer.observe(target.current);
  }, []);
  
  const testFunc = () => {
    setIsLoading(true);
    console.log("TEST");
    setIsLoading(false);
  }
  
  const options = {
    root: document.getElementById('root'),
    rootMargin: '10px',
    threshold: 0.3,
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log('entry: ', entry);
      console.log('observer: ', observer);
      testFunc();
    });
  }, options);

  return (
    <div className="container" id='infinite-scroll-container'>
      {renderBoxList.map((v, idx) => (
        <Box boxNumber={idx+1} key={idx} />
      ))}
      <div ref={target} style={{ border:'1px solid black' }} />
    </div>
  );
};

export default App;