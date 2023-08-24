import _ from 'lodash';
import './style.css';
import {createContent,createPage,pageState} from './base';'/base.js';
createContent();

createPage();

const header = document.getElementById("headerId").addEventListener('click',checkState);



function checkState(){
  if(pageState==="Home"){
  console.log("Home Clicked in index");

}

else if (pageState==="About"){
  console.log("About Clicked in index");

}

else if (pageState==="Contact"){
  console.log("Contact Clicked in index");

  
}}






 