import React, { useContext } from 'react'
import './Home.css';
import { UserContext } from "../App";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home'>
      <div className='leftContaint'>
            <h3><span className='highlighted-text'>Hii Professionals ,</span><br/> Get Start Your Career By Building Your and showcase your skils and Experience to your recruiter and Get confirm placement</h3>
        <div className="profile-options">
        <NavLink extract="true" to="/signup">
                    <button className='button other primary-btn'>Register {" "}</button>
        </NavLink>
          
          <NavLink extract="true" to="/signin">
            
                  <button className="button other highlighted-btn">Login</button>
          </NavLink>
                </div>
      </div>
    </div>
  )
}

export default Home

//rafce()