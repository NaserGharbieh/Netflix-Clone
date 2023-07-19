import React from 'react'; 
import Movie from './Movie';

const MovieList = (props) => {
    return (
        <div style={{display:"flex",flexDirection:"column" }}>
        <h1 style={{padding:"55px"}}></h1>
    <Movie MovieCard={props.MovieList}/>
            </div>
    );
}

export default MovieList;
