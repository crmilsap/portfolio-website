import React from 'react';

function Navbar() {

    return (
        <nav>
          {/* Mobile Display */}
          <input type = "checkbox" id = "check"/>
          <label 
          htmlFor = "check" 
          className = "checkbtn" 
          >
            <i className = "fas fa-bars"></i>
          </label>

          <label className = 'name-nav'> Cory Milsap </label>
            <ul>
              <li> <span className = 'active'> About </span> </li>
              <li> <span> Experience </span> </li>
              <li> <span>Proficiencies </span> </li>
              <li> <span> Projects </span> </li>
              <li> <span> Contact </span> </li>
            </ul>
        </nav>
    );
}  

export default Navbar