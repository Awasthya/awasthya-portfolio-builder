import React from "react"
import './Cards.css';
const Card = (props) => {
  return (
    <div className="outer">
      <div className='demo1 btn_shadow card'>
        <div className='title_content d_flex'>
          
          { 
   ( () => {if(props.header === 'Education') {
      return  ( <>
        <div className='div1'> 
          <h2>{props.college}</h2>
                    <p>{props.title}</p>
                    <p>CGPA {props.CGPA}</p>
        </div>
        <div className='div2'>
                  <span>{props.City}-{props.state}</span>
              <span> {props.Location}</span>
              </div>
        </>);
            }
            })()
          }
         { 
   ( () => {if(props.header === 'Experience') {
      return  ( <>
        <div className='div1'> 
          <h2>{props.companyName}</h2>
                    <p>{props.desgination}</p>
          <p>Desgination : {props.description}</p>
          <span>{props.workDuration}</span>
        </div>
        <div className='div2'>
                
              <span> {props.state}</span>
              </div>
        </>);
            }
            })()
          }
          
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Card