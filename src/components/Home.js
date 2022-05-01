import React from 'react'
import Login from './accountcomponents/Login'
import Allquestions from './Allquestions'
import { iscore } from './Question'

export default function Home() {
  const showScore=()=>{
    console.log(iscore);
  }
  return (
    <div className='container'>
      <h1>Q for quiz</h1>
      <h4>here is your quiz, good luck</h4>
      <Allquestions/>
      <button id="submit" onClick={showScore} className='btn btn-warning my-3'>Submit</button>
    </div>
  )
}
