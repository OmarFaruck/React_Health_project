import React from 'react';
import {NavLink} from 'react-router-dom'
import '../Recentsidebar/Recent.css'
const Recent = () => {
  return (
    <section id='Recent'>
      <div className="sidebar-block sidebar">
        <h3 className="sidebar-title">Tag Cloud</h3>
        <div className="tagcloud">
          <li><NavLink className="nav-link" to="/">dish</NavLink></li>
          <li><NavLink className="nav-link" to="/">menu</NavLink></li>
          <li><NavLink className="nav-link" to="/">food</NavLink></li>
          <li><NavLink className="nav-link" to="/">sweet</NavLink></li>
          <li><NavLink className="nav-link" to="/">tasty</NavLink></li>
          <li> <NavLink className="nav-link" to="/">delicious</NavLink></li>
          <li> <NavLink className="nav-link" to="/">desserts</NavLink></li>
          <li><NavLink className="nav-link" to="/">drinks</NavLink></li> 
        </div>
      </div>
    </section>
  );
};

export default Recent;