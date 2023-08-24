const body = document.getElementsByTagName("BODY")[0];


export  {createPage,createContent};


let pageState= "Home";

const createContent=()=>{
    const contentDiv= document.createElement("div");
    contentDiv.id="content";
    body.appendChild(contentDiv);



}
 const createPage=()=>{

    const content = document.querySelector("#content");

    console.log("this is base.js")
    const header =document.createElement("header");


    const headerHome= document.createElement("headerChild");
   
    headerHome.textContent= "Home";
    headerHome.id="headerHome";
    headerHome.addEventListener('click',sayWhat)

    const headerAbout= document.createElement("headerChild");
    headerAbout.textContent="About";
    headerAbout.id="headerAbout";
    headerAbout.addEventListener('click',console.log("About"))


    const headerContact= document.createElement("headerChild");
    headerContact.textContent="Contact";
    headerContact.id="headerContact";

    header.appendChild(headerHome);
    header.appendChild(headerAbout);
    header.appendChild(headerContact);
    content.appendChild(header);
    
    
    let sayWhat = () =>
    {
        console.log("HeaderHOMERS");
    }



}