const body = document.getElementsByTagName("BODY")[0];
import Burger from './burger.png';


export  {createPage,createContent,pageState};

let pageState= "Home";


const createContent=()=>{
    const contentDiv= document.createElement("div");
    contentDiv.id="content";
    body.appendChild(contentDiv);



}
 const createPage=()=>{

   
    console.log("this is base.js")

    const content = document.querySelector("#content");

 
    const header =document.createElement("header");
    header.id="headerId";


    const headerHome= document.createElement("div");
    headerHome.classList.add("headerChild");
    headerHome.textContent= "Home";
    headerHome.id="headerHome";
    headerHome.addEventListener('click',homeState);

    const headerAbout= document.createElement("div");
    headerAbout.classList.add("headerChild");
    headerAbout.textContent="About";
    headerAbout.id="headerAbout";
    headerAbout.addEventListener('click',aboutState);


    const headerContact= document.createElement("div");
    headerContact.classList.add("headerChild");
    headerContact.textContent="Contact";
    headerContact.id="headerContact";
    headerContact.addEventListener('click',contactState);

    header.appendChild(headerHome);
    header.appendChild(headerAbout);
    header.appendChild(headerContact);
    content.appendChild(header);
    
    //Body

    const bodyContent= document.createElement('div');
    bodyContent.id="bodyContent";
    // const burgerPic= new Image();
    // burgerPic.src= Burger;
    // bodyContent.appendChild(burgerPic);
    content.appendChild(bodyContent);


    function homeState(){

        pageState="Home";

        // console.log(pageState);

    }

    function aboutState(){
        pageState="About";
        // console.log(pageState);

    }

    function contactState(){
        pageState="Contact";
        // console.log(pageState);

    }



}