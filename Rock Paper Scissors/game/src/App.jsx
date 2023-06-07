import { useEffect, useState } from "react";
import './App.css'
import React from 'react'
function App() {

  const [userchoice, setUserchoice] = useState(null);
  const [computerchoice, setComputerchoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ['ROCK', 'PAPER', 'SCISSORS']
  const handleclick = (e) => {
    setUserchoice(e);
    generatecomputerchoice();
    

  }
  const generatecomputerchoice = () => {
    const randomchoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerchoice(randomchoice);
    
  }
  useEffect(()=>{
 checkResult()
  },[userchoice,computerchoice])

 
  const checkResult = () => {
    switch (userchoice + computerchoice) {
      case 'SCISSORSPAPER':
      case 'ROCKSCISSORS':
      case 'PAPERROCK':
        setResult('YOU WIN')
        break
      case 'PAPERSCISSORS':
      case 'SCISSORSROCK':
      case 'ROCKPAPER':
        setResult('YOU LOSE')
        break
      case 'ROCKROCK':
      case 'PAPERPAPER':
      case 'SCISSORSSCISSORS':
        setResult('ITS A DRAW')
        break
    }
  }
  return (
    <> 
    <h1 className="hd0"> ROCK PAPER SCISSORS GAME</h1>
      <div>
        <h1 className="HD1">USER CHOICE  : {userchoice}</h1>
        <h1 className="HD2">COMPUTER CHOICE : {computerchoice}</h1>
        {/* <button onClick={()=>handleclick('Rock')}>Rock</button>
  <button onClick={()=>handleclick('Paper')}>Paper</button>
  <button onClick={()=>handleclick('Scissors')}>Scissors</button> */}
        {choices.map((choice, index) =>
          <button className="btn" key={index} onClick={() => handleclick(choice)}>{choice}</button>)}
          
          <h1 className="HD3">Result : {result} </h1>
      </div>
    </>
  )
}

export default App
