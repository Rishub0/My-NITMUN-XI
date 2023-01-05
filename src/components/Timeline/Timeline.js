import React from 'react'
import "./Timeline.css"

const Timeline = () => {
  return (
    <div className='Timeline-container'>
        <div class="timeline">
      <div class="events">
        <ol>
          <ul>
            <li>
              <a href="#0" class="selected">Early Life</a>
            </li>
            <li>
              <a href="#1">Career</a>
            </li>
            <li>
              <a href="#2">Philosophy</a>
            </li>
            <li>
              <a href="#3">Legacy</a>
            </li>
          </ul>
        </ol>
      </div>
    </div>
    
    <div class="events-content">
      <ol>
        <li id="0" class="selected">
  				<h2>Early Life &amp; Education</h2>
          <p>hello world</p>
        </li>
        
        <li id="1">
  				<h2>Career</h2>
          <p>new york times</p>
        </li>
        
        <li id="2">
  				<h2>Philosophy</h2>
          <p>here</p>
        </li>
        
        <li id="3">
  				<h2>Legacy</h2>
          <p>after</p>
        </li>
      </ol>
    </div>
    </div>
  )
}

export default Timeline