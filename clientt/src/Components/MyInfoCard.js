import React, { useEffect, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useHistory } from 'react-router-dom';

const MyInfoCard = (props) => {
    const History = useHistory();
    const [user, setUser] = useState({email :"",header:"",input1:"",input2:"",input3:"",input4:"",input5:""});
    const [avdata, setdata] = useState({
    });
   
    const userInfo = async (e) => {
        try {
    
            const response = await fetch('/getdata', {
              headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
                
              },
              credentials:'include'
            });
            
            const data = await response.json(); 
            setUser({...user, email: data.email});
            if (response.status !== 200) {
      
              const error = new Error(response.error);
              throw error;
            }
          } catch (err) {
            console.log(err);
            History.push('./signin');
            }
    }
    const storeData = async (e) => {
        e.preventDefault();
        
   
        const { email,header,input1, input2, input3, input4, input5 } = user;
        const res = await fetch("/storeData", {
            method: "POST",
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify({
                email,header,input1,input2,input3,input4,input5
            })
            
        });
        const data = await res.json();

        if (!data) {
            window.alert("data is not stored");
        } else {
            window.alert('changes made');
          
        }
    }
    useEffect(() => {
        userInfo();
    }, []);
    
    let name,value;

    const handleInput = (event) =>{
        name = event.target.name;
        value = event.target.value;

        setUser({ ...user, [name]: value });
        
        console.log(value);
    }
  return (
    <div className='MainContaint'>
      <div className='container'>
          <div className='heading text-center'>
          <h1> {props.header} </h1>
          {console.log(props.header)}
          </div>     
        <form method="POST" className="register-form" id="register-form" action=''>
        <div className="form-group"s>
        <label for="name"><PersonIcon/></label>
        <input type="text" name="header" id="header"
        value={user.header}
                        onChange={handleInput}
                          placeholder= {props.header}/>
                  </div>    
         <div className="form-group">
        <label for="name"><PersonIcon/></label>
        <input type="text" name="input1" id="name"
        value={user.input1}
                        onChange={handleInput}
                          placeholder= {props.input1}/>
                  </div>
                  <div className="form-group">
        <label for="name"><PersonIcon/></label>
                      <input type="text" name="input2" id="name"
                          value={user.input2}
                          onChange={handleInput}
                          placeholder={props.input2} />
                    </div>
                    <div className="form-group">
                        <label for="email"><EmailIcon/></label>
                        <input type="email" name="input3" id="email"
                        value={user.input3}
                        onChange={handleInput}
                        placeholder={props.input3}/>
                    </div>
                    <div className="form-group">
                        <label for="Phone"><EmailIcon/></label>
                        <input type="text" name="input4" id="phone"
                        value={user.input4}
                        onChange={handleInput}
                        placeholder={props.input4}/>
                    </div>
                    <div className="form-group  ">
                        <label for="Phone"><EmailIcon/></label>
                        <input type="text" name="input5" id="phone"
                        value={user.input5}
                        onChange={handleInput}
                        placeholder={props.input5}/>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
                        <label for="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                    </div>
                    <div className="form-group form-button">
                        <input type="submit"  onClick = {storeData} name="signup" id="signup" className="form-submit" value="Register"/>
                    </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfoCard
