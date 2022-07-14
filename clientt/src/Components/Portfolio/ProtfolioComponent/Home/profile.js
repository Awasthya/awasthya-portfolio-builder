import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Typical from 'react-typical';
import './profile.css';
const Profile = (props) => {
  const History = useHistory();
  const [user, setUser] = useState([]);
  const callAboutPage = async () => {
    try {
    
      const res = await fetch('/Info', {
        headers: { 
          Accept : 'application/json',
          'Content-Type': 'application/json'
          
        },
        credentials:'include'
      });
      
      const data = await res.json();

      setUser(data);
      if (res.status !== 200) {

        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      History.push('./signin');
      }
  }
  const getdata = async (req) => {
      
    await setUser((props.data));
  }
   
  useEffect( async(req,res) => {
   callAboutPage();
  }, []);
  return (
   
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
        
            <div>
                <div className="profile-details-name">
                    <span className="Primary-text">{" "}
                    <h1>
                  Hello, I am <span className='highlighted-text'>{user.name}</span>
                    </h1>
                  </span>
              
            </div>
                <div className="profile-details-role">
                    <span className="Primary-text">{" "}
                    <h1 className='typical'>
                        <Typical 
                        loop={Infinity}
                        steps ={[
                          ` ${user.name}🥇`,
                          1000,
                          "Programmer 🎭",
                          1000,
                          "Full Stack Web Devloper 🖥️",
                          1000,
                          "Portfolio :abacus:",
                          1000,
                        ]}
                        />    
                    </h1>
                  </span>
                  <span className="profile-role-tagline">
                  {user.description}
                  </span>
                </div>
                        
                </div>
       
                <div className="profile-options">
                    <button className='button button-color primary-btn'>Hire Me {" "}</button>
               
                <a href="Amit_Resume.pdf" download="AmitResume.pdf">
                  <button className="button button-color highlighted-btn">Get Resume</button>
                  </a>
                </div>
                <div className='colz'>
                  <div className='colz-icon'>
                    <a href="#">
                        <i className='fa fa-facebook-square'></i>
                    </a>    
                    <a href="#">
                        <i className='fa fa-google-plus-square'></i>
                    </a>    
                    <a href="https://www.instagram.com/amitawasthiii3/">
                        <i className='fa fa-instagram'></i>
                    </a>    
                    <a href="https://www.linkedin.com/in/amit-awasthi-83a8121b4/">
                        <i className='fa fa-linkedin'></i>
                    </a>   
                  </div>
                </div>
            </div>
            
            <div className='profile-picture'>
              <div className="profile-picture-background">

              </div>
            </div>
      </div>
    </div>
  )
}

export default Profile
