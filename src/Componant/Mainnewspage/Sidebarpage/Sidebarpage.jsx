import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Sidebarpage/Sidebarpage.css'
const Sidebarpage = () => {
    return (
        <section id='sidebar'>
        <div className="sidebar-block">
         <h3 className="sidebar-title">Categories</h3>
         <ul className="categories">
           <li><NavLink to="#">Food <span>12</span></NavLink></li>
           <li><NavLink to="#">Dish <span>22</span></NavLink></li>
           <li><NavLink to="#">Desserts <span>37</span></NavLink></li>
           <li><NavLink to="#">Drinks <span>42</span></NavLink></li>
           <li><NavLink to="#">Ocassion <span>14</span></NavLink></li>
         </ul>
       </div>
   </section>
    );
};

export default Sidebarpage;