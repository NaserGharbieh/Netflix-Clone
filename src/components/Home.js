import React from 'react';
import { useEffect,useState } from "react";
import Navbar from './Navbars';

import MovieList from "./MovieList";

function Home(){
    const [moviesdata,setmoviesdata]=useState([]);

    const getAllMovies=()=>{
        const serverURL =`${process.env.REACT_APP_SERVER_URL}/trending`

          // using axios
        // axios.get(serverURL)
        // .then(response=>{
        //     console.log(response.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // })
        fetch(serverURL)
            .then(response => {
                response.json().then(data => {
                    console.log(data)
                    setmoviesdata(data)

                })
            })
    }

    useEffect(()=>{
        getAllMovies();
    },[])
    return(
        <>
    <Navbar/>
    <MovieList MovieList={moviesdata}/>
    
        </>
    )
}
export default Home;