const body = document.getElementsByTagName("BODY")[0];


export  {createPage};

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
    const headerAbout= document.createElement("headerChild");
    const headerContact= document.createElement("headerChild");

    header.appendChild(headerHome);
    content.appendChild(header);
    
    




}