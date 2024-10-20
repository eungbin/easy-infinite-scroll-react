import React from 'react';
import '../css/Box.css';

interface IProps {
  src: string;
  name: string;
}

export default function Box({ src, name }: IProps) {
  
  return (
    <div className='box-container'>
      <img className='box-inner-image' src={`https://image.tmdb.org/t/p/w500${src}`} />
      <span className='box-inner-text'>{name}</span>
    </div>
  );
}