import React from 'react'

const Card = (props) => {
  return (
      <div>
        <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>My name is {props.user} and I am {props.age} years old.</p>
        <button>view Profile</button>
      </div>
    </div>
  )
}

export default Card