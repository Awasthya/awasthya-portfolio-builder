import React from 'react'
import './Features.css';
const Card = (props) => {
  return (
    <div>
        <div className="demo btn_shadow">
              <img src={props.logo} alt='' />
              <h2>{props.skill}</h2>
              <p>{props.title}</p>
            <a href="#">
                <i className="fas fa-arrow-right">
                </i>
              </a>

            </div>
    </div>
  )
}

export default Card