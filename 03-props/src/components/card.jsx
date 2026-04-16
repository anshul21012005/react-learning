import React from 'react'

const Card = (props) => {
  console.log();
  return (
    <div className="Card">
      <img src={props.img} />
      <h1>{props.user},{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <button className='button'>click here</button>
    </div>
  )
}

export default Card