import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from './components/Box';
import useGetTopRatedMovies from './data/Data';

interface Props {}

const App = ({  }: Props) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetTopRatedMovies();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if(!!data) { setMovies([...data.pages]); }
  }, [data]);
  
  console.log("data", data);

  return (
    <div className="container" id='infinite-scroll-container'>
      {data?.pages.map((v) => (
        v.results.map(value => (
          <Box src={value.poster_path} name={value.title} key={value.id}>
            
          </Box>
        ))
      ))}
    </div>
  );
};

export default App;