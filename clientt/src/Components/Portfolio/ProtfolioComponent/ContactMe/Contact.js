import React, { useEffect,useState } from 'react'
import contact1 from "../assets/Home/contact1.png";
import "./Contact.css"
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})
    let [userData, setUserData] = useState({});
    let [personalInfo, setPersonalInfo] = useState({});
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
      setUserData(data);
      if (data.personalInfo[0])
        setPersonalInfo(data.personalInfo[0]);
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
  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
                  <p>Computer Science Student</p><br/>
                  <p>{ personalInfo.description}</p> <br />
                  <p>Phone: {userData.phone}</p>
                  <p>Email: {userData.email}</p> <br />
                  <span>FIND WITH ME</span>
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
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
                
          
