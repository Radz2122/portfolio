import React from 'react';
import './Sidebar.scss';
import { stack as Menu } from 'react-burger-menu';
export default props => {
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
   
  };
  const scrollToMid = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth"
    });
  };
 
  const scrollToEnd = () => {
    window.scrollTo({
      top: 1000000,
      behavior: "smooth"
    });
  };
  return (
    <Menu>
        <button className="menu-item" onClick={scrollToTop}>À PROPOS</button>
        <button  className="menu-item"onClick={scrollToMid}>PORTFOLIO</button>
        <button  className="menu-item"onClick={scrollToEnd}>CONTACT</button>
    </Menu>
   );
};