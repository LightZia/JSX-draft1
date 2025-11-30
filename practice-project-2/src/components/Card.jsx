import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt="profile picture" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, enim!</p>
      </div>
    </div>
  )
}

export default Card