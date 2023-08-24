import _ from 'lodash';
import './style.css';
import {createPage} from './base';'/base.js';


const body = document.getElementsByTagName("BODY")[0];



const createContent=()=>{
    const contentDiv= document.createElement("div");
    contentDiv.id="content";
    body.appendChild(contentDiv);



}
createContent();

createPage();
 function component() {
   const element = document.createElement('div');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());
