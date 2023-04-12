import React, { useState } from 'react'
import MealItem from './MealItem'
import './Style.css';

const Meal = () => {
    const [search,setSearch] = useState("");
    const [Mymeal,setMymeal] = useState();
    const searchMeal =(Event) => {
        if (Event.key =="Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => 
                //  console.log(data)
                {setMymeal(data.meals)}
            )
        } setSearch("")
    }
  return (
    <>
    <div className='main'>
        <div className="heading">
            <h1>Search Your Food Recipe</h1>
        </div>
        <div className='searchBox'>
            <input type="search" className='search-bar' placeholder='Enter food name' onChange={(e)=> setSearch(e.target.value)} onKeyPress={searchMeal} />

        </div>
        <div className="container">
            {
                (Mymeal == null)? <p className="notSearch">Not found</p>:
                Mymeal.map((res)=> {
                    return( <MealItem data={res}/>)
                })
            }
           
        </div>
    </div>
    </>
  )
}

export default Meal