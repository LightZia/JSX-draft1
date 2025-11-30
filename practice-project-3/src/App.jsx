import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {

  const arr = [
    {
      name: 'Zia',
      age: 18
    },
    {
      name: 'Somil',
      age: 19
    },
    {
      name: 'Thanuj',
      age: 18 
    }
  ]

  return (
    <div className="parent">
      {arr.map(function(elem){
        return `${elem.name}`
      })}
    </div>
  )
}

export default App