import React from 'react'
import './Style.css';

const MealItem = (getMeal) => {
  console.log(getMeal.data)
  return (
    <>
      <div className="card">
        <img src={getMeal.data.strMealThumb
} alt="" />
        <div className='info'>
          <h2>{getMeal.data.strMeal
}</h2>
          <p>{getMeal.data.strArea}</p>
        </div>
        <div className='recipe'>
          <h2>Recipe</h2>
          <img src={getMeal.data.strMealThumb} alt="" />
          <p>{getMeal.data.strInstructions}</p>
          <a href={getMeal.data.strYoutube
}>watch video</a>
        </div>

      </div>
    </>
  )
}

export default MealItem