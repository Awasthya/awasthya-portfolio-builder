import React ,{ useState } from 'react'
import PortfolioData from './PortfolioData';
import Card from './Card';
import { useEffect } from 'react'; 
const Project = () => {
  
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
      <section className="portfolio top" id="portfolio">
        <div className='container'>
          <div className='heading text-center'>
            <h4> VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK</h4>
            <h1> My Portfolio</h1>
          </div>
          <div className='content grid'>
            {user.projectInfo?.map((value, index) => {
              return <Card key={index} projectName={value.projectName} title={value.title} description={value.description} Image={value.Image} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project
