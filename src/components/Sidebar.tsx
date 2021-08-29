import React from 'react';
import "./Sidebar.css";
import logo from '../images/logo LM.png';
import { useState } from 'react';

function Sidebar(){

  const [sidebar_active, setSidebar_active] = useState(false);

  function sidebarToggle(){
    setSidebar_active(sidebar_active => !sidebar_active);
  }
  

  return(
    <>
      <div className={`opacitybg ${sidebar_active?"active":""}`} onClick={sidebarToggle}></div>
      <div className={`sidebar ${sidebar_active?"active":""}`}>


        {/* onclick gera um evento que seta o sidebar_active para o seu valor invertido */}
        <div
          className="sidebarbtn"
          onClick={sidebarToggle}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>


        <img className="logo" src={logo}/>
        <ul>
          <li><a href="#" onClick={sidebarToggle}>INICIO</a></li>
          <hr />
          <li><a href="#" onClick={sidebarToggle}>PORTIFÓLIO</a></li>
          <hr />
          <li><a href="#" onClick={sidebarToggle}>SOBRE MIM</a></li>
          <hr />
          <li><a href="#" onClick={sidebarToggle}>CONTATO</a></li>
        </ul>

        <div className="footer">
        </div>
      </div>
    </>
  );
}

export default Sidebar;