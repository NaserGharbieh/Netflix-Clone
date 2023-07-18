import React from 'react';
import MovieList from './MovieList'; 
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h2>Home</h2>
         <MovieList/>
            
        </div>
    );
}

export default Home;
