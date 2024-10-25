import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from './components/Box';
interface Props {}

const App = ({  }: Props) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNexPage] = useState(false);
  const [pageParams, setPageParams] = useState([]);
  const observerRef = useRef();
  
  const fetchTopRatedMovies = async(page) => {
    if(pageParams.includes(page)) return;
    setLoading(true);

    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTVmMzI3NDQ5OTQ1ZGRmOGFhZjEyMGUzZmM5Yjk4YiIsIm5iZiI6MTcyODI4NTA3OC45NzYzOTksInN1YiI6IjY3MDI0MDg1MTU5MmVmMWJhOTg1N2JhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXR9vdMoyAE1TB4V9JvYzD4MhmY0EUI0qLyGrzYwJD8`
        }
      });
      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]);
      setPageParams((prev) => [...prev, page]);
      setHasNexPage(data.page < data.total_pages);
      setLoading(false);
    } catch(err) {
      return [];
    }
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const firstEntery = entries[0];
      if(firstEntery.isIntersecting) {
        console.log("show");
      } else {
        console.log("no show");
      }
    });
    
    if(observerRef.current) observer.observe(observerRef.current);

    return () => {
      if(observerRef.current) observer.unobserve(observerRef.current);
    }
  }, []);
  useEffect(() => {
    fetchTopRatedMovies(page);
  }, [page]);

  return (
    <>
      <div className="container" id='infinite-scroll-container'>
        {movies?.map((v, idx) => (
          <Box src={v.poster_path} name={v.title} key={idx}>
          
          </Box>
          )
        )}
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1 ref={observerRef}>Load More</h1>
      </div>
    </>
  );
};

export default App;