import React from 'react'

const Card = (props) => {



  return (
    <div className="card">
        <img src={props.img}cc alt="Profile" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>View Profile</button>
      </div> 
  )
}

export default Card
