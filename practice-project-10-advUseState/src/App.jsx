import React, { useState } from 'react'

const App = () => {

  const [obj, setObj] = useState({user:'Zia', age:18})
  const [arr, setArr] = useState([10, 20, 30])
  const [secObj, setSecObj] = useState({user:"Habibi", age:23})
  const [num, setNum] = useState(10)

  const btnClicked = () => {
    const newObj = {...obj}
    newObj.user = 'Zia Rahman'
    newObj.age = 19

    const newArr = [...arr]
    newArr.push(88)

    setSecObj(prev => ({...prev, age:20, user:'Habib'}))

    setNum(prev => (prev+1))
    setNum(prev => (prev+1))
    setNum(prev => (prev+1))

    setObj(newObj)
    setArr(newArr)
  }

  return (
    <div>
      <h1>{obj.user} {obj.age}</h1>
      <h1>{arr}</h1>
      <h1>{secObj.user}, {secObj.age}</h1>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App