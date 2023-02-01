import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Features.css'
import Card from './Card';
const Features = () => {
 
  const [user, setUser] = useState({});
  const History = useHistory();
  const callAboutPage = async () => {
    try {
      const response = await fetch('/Info', {
       
        headers: {
          Accept : 'application/json',
          'Content-Type': 'application/json'
          
        },
        credentials:'include'
      });
      
      const data = await response.json();
      setUser(data);
      if (response.status !== 200) {

        const error = new Error(response.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      History.push('./signin');
      }
  }
  useEffect(() => {
    callAboutPage();
    
  }, []);
  
  return (
    <div>
      <section className='features top' id = "features">
        <div className='container'>
          <div className='heading'>
            <h4>Features </h4>
            <h1 className="X">What I Do</h1>
          </div>
          <div className='content grid'>
            {user.skillInfo?.map((val, index) => {
              return <Card key={index} skill={val.skill} title={val.description} logo={val.certificateLink} />;
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
