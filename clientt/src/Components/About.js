import React, { useEffect,useState } from 'react'
import Portfolio from './Portfolio/portfolio';
import { useHistory } from 'react-router-dom';

const About = () => {
  const History = useHistory();
  let [userData, setUserData] = useState({});
  
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
      setUserData(data);
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
    <>
      <Portfolio data={userData} />
      
    </>
  )
}

export default About
