import React from 'react';
import './App.css';
import Box from './components/Box';

interface Props {}

const App = ({  }: Props) => {
  const renderBoxList = Array.from({length: 100}, () => 0);
  return (
    <div className="container">
      {renderBoxList.map((v, idx) => (
        <Box boxNumber={idx+1} key={idx} />
      ))}
    </div>
  );
};

export default App;