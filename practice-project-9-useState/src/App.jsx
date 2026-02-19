// import React from 'react'
import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  return (
    <div className='overflow-hidden'>
      <div className = 'bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F6875927.jpg&f=1&nofb=1&ipt=08c3f09507fc0fa4b90205ee563b2f420477e71284dde7f009b2906f88984b78)] bg-cover h-screen w-screen flex justify-center items-center flex-col'>
        <div className='bg-white/2 backdrop-blur-md w-screen m-5 py-15 rounded-xl text-5xl text-white font-bold flex items-center justify-center'>
          <h1>{num}</h1>
        </div>
        <button className='py-7 px-8 select-none cursor-pointer bg-red-700/30 font-sans rounded-xl text-white m-5 backdrop-blur-md tracking-widest' onClick={() => {
          setNum(num+1)
        }}>COUNT</button>
      </div>
    </div>
  )
}

export default App