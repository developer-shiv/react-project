import React, { useState } from 'react';
import logo from '../assests/logo.png';



function SideMenu(){
    const [inactive,setInactive ]=useState(false)
    return (
        <div className={`side-menu ${inactive ? "inactive":""}`}>
          <div className="top-section">
              <div className="logo">
                   <img src={logo} alt="alt" />
              </div>
              <div className="toggle-menu-btn">
                  <button onClick={()=>setInactive(!inactive)}>
              {inactive?<i class="bi bi-arrow-right-square-fill"></i>:<i class="bi bi-arrow-left-square-fill"></i>}
              </button>
              </div>
          </div>
          <div className="search-container">
              <button className="search-btn">
              <i class="bi bi-search"></i>
              </button>
          
             <input type="text" placeholder="search" />
          </div>
          <div className="divider"></div>
          <div className="main-menu">
              <ul>
                  <li >
                      <a className="menu-item" >
                          <div className="menu-icon">
                          <i class="bi bi-speedometer2"></i>
                          </div>
                          DashBoard</a>
                  </li>
                  <li >
                      <a className="menu-item" >
                          <div className="menu-icon">
                          <i class="bi bi-newspaper"></i>
                          </div>
                          Content</a>
                          <ul className="sub-menu">
                              <li>
                                 <a>Course</a>
                              </li>
                              <li>
                                 <a>Videos</a>
                              </li>
                          </ul>
                  </li>
                  <li >
                      <a className="menu-item" >
                          <div className="menu-icon">
                          <i class="bi bi-vector-pen"></i>
                          </div>
                          Design</a>
                  </li>
              </ul>

          </div>
        </div>
    )
}

export default SideMenu;