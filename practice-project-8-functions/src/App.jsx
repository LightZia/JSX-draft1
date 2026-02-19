import React from 'react'

const App = () => {

  function inputValueChanged(value){
    console.log(value)
  }

  return (
    <div>
      <input onChange={function(elem){
        inputValueChanged(elem.target.value)
      }} type="text" placeholder='Enter your name'/>
      <div onMouseMove={(elem) => {
        console.log(elem.clientX, elem.clientY)
      }}
      className='container'></div>
    </div>
  )
}

export default App