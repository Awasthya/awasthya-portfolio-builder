import React, { useState } from 'react'

import './Contact.css'

const Contact = () => {

  const [searchval, setSearch] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setSearch(data);
  };
  return (
    <div className="Contact-pic">
      <div className='searchbar'>
      <h3 ><span className='highlighted-text'>Hii Professionals ,</span><br/> Find Other Professional and know about them</h3>
 
        <input type="text" placeholder='Search....' value={searchval} onChange={inputEvent} />
    </div>
    </div>
  );
}

export default Contact
