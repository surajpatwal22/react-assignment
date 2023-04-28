import React from 'react'
import { useContext } from 'react'
import { AppContext, useGlobalContext } from './context'
import  Search  from "./Search";
import  Movie  from "./Movie";

const Home = () => {
  // const name = useContext(AppContext)
  
  return (
    <>
    
    <Search />
    <Movie />
    
    </>
  )
}

export default Home