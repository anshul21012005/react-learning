import React from 'react'

 const Card = (props) => {
  console.log(props);
  
  return (
      <div className="Card">
        <div className="top">
          <img src={props.brandLogo} alt="logo" />
          <button>save</button>
        </div>
        <div className="middle">
          <h3>{props.name}</h3>
          <span>{props.datePosted} </span>
          <h2>{props.post}</h2>
          <div>
            <h4>{props.tag}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.loction} </p>
            </div>
            <button>Apply Now</button>
          </div>
      </div>
  
  )
}

export default Card