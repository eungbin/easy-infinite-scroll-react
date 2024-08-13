import React from 'react';
import '../css/Box.css';

interface IProps {
  boxNumber: number;
}

export default function Box({ boxNumber }: IProps) {
  
  return (
    <div className='box-container'>
      <span className='box-inner-text'>{boxNumber}</span>
    </div>
  );
}