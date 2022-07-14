import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      <div className='leftContaint'>
            <h3><span className='highlighted-text'>Hii Professionals ,</span><br/> Get Start Your Career By Building Your and showcase your skils and Experience to your recruiter and Get confirm placement</h3>
        <div className="profile-options">
                  <a href="/signup">
                    <button className='button other primary-btn'>Register {" "}</button>
                  </a>
                <a href="/signin">
                  <button className="button other highlighted-btn">Login</button>
                  </a>
                </div>
      </div>
    </div>
  )
}

export default Home

//rafce()