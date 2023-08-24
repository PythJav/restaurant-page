
import { createPage } from "./base";
export {createHome};


const createHome=()=>{
    bodyContent = document.querySelector("#bodyContent");

    const homeTitle = document.createElement("div");
    homeTitle.classList.add("typeTitle");
    homeTitle.textContent= "Home of Culinary";

    const homeBody=document.createElement("div");

    homeBody.textContent="These are our most favourite menu";

    bodyContent.appendChild(homeTitle);
    bodyContent.appendChild(homeBody);

}

