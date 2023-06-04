import './header.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function header() {
  return (
    <div id='abc'>
      
       <nav>
       {/* <div>
       <img src={calamardo} alt="avatar" /></div> */}
        <ul>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Airways</a></li>
            <li><a href="#">Book Tickets</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default header