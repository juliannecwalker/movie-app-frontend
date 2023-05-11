import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import {Routes, Route} from 'react-router-dom';

function App() {
  // movies will store movies retunred from the API
  const [movies, setMovies] = useState();

  const [movie, setMovie] = useState();

  const [reviews, setReviews] = useState();

  const getMovies = async () => {
    try {
      // 'api/v1/movies' will be appended to axios baseURL
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch(err){
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
    try{
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
    }
    catch(error){

    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews} movie={movie}/>}></Route>
        </Route>
      </ Routes>
    </div>
  );
}

export default App;