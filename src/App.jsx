import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <h2>hello there </h2>
    <br />
    <Header title = {"title 1 "} />
    <Header title = {"title 2 "} />
    </>
  )
}


function Header ({title}) {
  return <>
  <h1> {title} </h1>
  </>
}



export default App
