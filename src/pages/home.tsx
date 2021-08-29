import React from 'react';

import './home.css';

import Sidebar from '../components/Sidebar';


import Component from '../components/Component';










import $ from 'jquery';
// testativas falhas de incluir o blast
//import 'blast-text';
//import * from 'blast-text';
//import '../assets/js/jquery.blast.min.js';
//$("title1").blast()
function Home() {

  /* 
  //appendScript('../assets/js/jquery.blast.min');
  //script.async = true;
  //document.body.appendChild(script);

  console.log($(".title1"));

  const script = document.createElement("script");
  script.src = "/test.js";
  document.body.appendChild(script);

  const jqueryscript = document.createElement("script");
  jqueryscript.src = "/jquery-3.6.0.min.js";
  document.body.appendChild(jqueryscript);

  const blastscript = document.createElement("script");
  blastscript.src = "/jquery.blast.min.js";
  document.body.appendChild(blastscript);
 */













  return (
    <div className="home">
      <Sidebar />

      <div className="slide1">
        <div className="max-1200">
          <div className="title1 color">
            <h1>OLÁ, <br />
              SOU LUCASMITTER,<br />
              <span className="spandevweb">Desenvolvedor Web</span></h1>
          </div>
        </div>
      </div>

      <div className="slide2">
        <div className="max-900 py5">
          
          <h1>SOBRE MIM</h1>
          <p>Tenho o Objetivo de me desenvolver como programador web e posteriormente mobile, gosto da área </p>
        </div>
      </div>

      <Component name="atributo" />
    </div>
  );
}

export default Home;
