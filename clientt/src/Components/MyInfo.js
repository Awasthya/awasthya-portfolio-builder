import React from 'react'
import MyInfoCard from './MyInfoCard'
const MyInfo = () => {
  return (
    <div>
          <MyInfoCard header = 'personalInfo' input1='Your First Name' input2 = 'Your Last Name' input3='description' input4='Your Email' input5='Your  Phone No'/>
          <MyInfoCard header = 'education'  input1='Your College Name' input2 = 'Degree Name' input3='Percentage' input4='City' input5='State'/>
          <MyInfoCard header='experienceInfo' input1='Your Company Name' input2='Your Designation' input3='Description' input4='Working Duration' input5='State' />
      <MyInfoCard header='Skills' input1='Skills' input2='Description' input3='logo Certificate'  />
      <MyInfoCard header='projectInfo' input1='Project Name' input2='Your Designation' input3='Description'  input4='Image Link'/>
    </div>
  )
}

export default MyInfo

