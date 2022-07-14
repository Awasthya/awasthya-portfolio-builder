import React, { useEffect,useState } from 'react'
import './Features.css'
import Card from './Card';
import data from './FeatureApi';
const Features = (props) => {
 
  const [user, setUser] = useState({});
  const callAboutPage = async () => {
    try {
      console.log('hiii');
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
          {console.log(user.skillInfo)}
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
