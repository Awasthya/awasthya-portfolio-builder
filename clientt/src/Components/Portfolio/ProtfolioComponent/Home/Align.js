import React from 'react'
import Profile from './profile.js';
import Footer from './Footer/Footer';
import './align.css';
const Align = (props) => {
  return (
    <div className="home-container">
      {console.log(props.data)}
      <Profile data={props.data} />
      <Footer/> 
    </div>
  )
}
export default Align
