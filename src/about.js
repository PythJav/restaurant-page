export {createAbout};

const createAbout=()=>{
    const bodyContent = document.querySelector("#bodyContent");

    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("typeTitle");
    aboutTitle.textContent= "About or About";

    const aboutBody=document.createElement("div");

    aboutBody.textContent="We about this";

    bodyContent.appendChild(aboutTitle);
    bodyContent.appendChild(aboutBody);

}