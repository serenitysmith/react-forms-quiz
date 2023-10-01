
import './App.css';
import React, {useState} from 'react';


function App() {
 
  
  const [firstName, setFirstName] = React.useState("")
  /**
   * Challenge: Track the applicant's last name as well
   */

  // my try at above challenge 
  const [lastName, setLastName] = React.useState("")
  ///did quiz on mjy own, scrimba says not the baest pracice but works, would like you to use an oject innstead of tw differnt state changes 

  console.log(firstName, lastName)

  
  function handleChange(event) {
      setFirstName(event.target.value)
      setLastName(event.target.value)
  }
  
  return (
      <form>
          <input
              type="text"
              placeholder="First Name"
              onChange={handleChange}

          />
          <input
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              
          />
      </form>
  )
}

export default App;
