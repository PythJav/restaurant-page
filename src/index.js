import _ from 'lodash';
import './style.css';

import {createContent,createPage,pageState,clearContent} from './base';'/base.js';
import { createHome } from './home';
import { createAbout } from './about';
createContent();

createPage();
checkState();

const header = document.getElementById("headerId").addEventListener('click',checkState);



function checkState(){
  if(pageState==="Home"){
    clearContent();
    createHome();
  console.log("Home Clicked in index");

}

else if (pageState==="About"){
  clearContent();
  createAbout();
  console.log("About Clicked in index");

}

else if (pageState==="Contact"){
  console.log("Contact Clicked in index");

  
}}






 