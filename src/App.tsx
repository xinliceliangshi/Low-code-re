import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import { count } from 'console'
// import List from './List1'
function App() {
  //列表页
  const [count, setCount] = useState(0)

  function add() {
    setCount(count + 1)
  }
  return (
    <>
      {/* <List /> */}
      <div>
        <button onClick={add}>add {count}</button>
      </div>
    </>
  )
}

export default App
