/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak


"use strict";

(function()
{
function displayHome()
{

    let indexText = "Welcome to Lab 1 by Ashok Sasitharan & Jacky Yuan";
    let indexTextElement = document.getElementById("index-welcome");
    indexTextElement.textContent= indexText;

    indexText = "WEBD6201: Lab 1";
    indexTextElement = document.getElementById("home-title");
    indexTextElement.textContent= indexText;
      // let paragraphOneText = "This is a simple site to demonstrate DOM Manipulation for ICE 1";
        
        //Different ways to select a paragraph element "paragraph one"
      //  let paragraphOneElement = document.getElementById("paragraphOne");

       // paragraphOneElement.textContent = paragraphOneText;
       // paragraphOneElement.className = "fs-5";

        // step 1. Create an element
     //   let newParagraph = document.createElement("p");
        //step 2. configure element
      //  newParagraph.setAttribute("id", "paragraphTwo");
       // newParagraph.textContent = "...And this is paragraph two";
       // //Step 3. select the parent element
      //  let mainContent = document.getElementsByTagName("main")[0];
        //step 4. Add/insert the element
      //  mainContent.appendChild(newParagraph);

       // newParagraph.className = "fs-6";

        //////another way to add an element ///////
        //let paragraphThree =`<p class="fs-7 fw-bold">And this is the Third Paragraph</p>`;
        //mainContent.innerHTML = paragraphThree;

      //  let paragraphDiv = document.createElement("div");
       // let paragraphThree = `<p id="paragraphThree" class="fs-7 fw-bold">And this is the third paragraph</p>`
       // paragraphDiv.innerHTML = paragraphThree;

        //insertion before a node
        //newParagraph.before(paragraphDiv);
      //  newParagraph.after(paragraphDiv);

        //deletions
        //paragraphOneElement.remove();
      //  mainContent.removeChild(paragraphOneElement);

        //Update / modification of an element
        //mainContent.firstElementChild.textContent = "Welcome Home!";

      //  mainContent.innerHTML =
      //  `<h1 id="firstHeading">Welcome to WEBD6201 - Lab 1</h1>
      //  <p id="paragraphOne" class="fs-3 fw-bold">This is my first paragraph</p>`
    
}
function displayAbout()
{
    let projectsTextElement = document.getElementById("about-title");
    projectsTextElement.innerHTML= `<h1>About Us</h1>`;
}
function displayProjects()
{
   
    let projectsTextElement = document.getElementById("projects-title");
    projectsTextElement.innerHTML= `<h1>Projects</h1>`;

    projectsTextElement = document.getElementById("projects-p1");
    projectsTextElement.innerHTML= `<p>Below are some of our favorite projects!!</p>`;

 //Discord Bot
    projectsTextElement = document.getElementById("projects-h3-1");
    projectsTextElement.innerHTML= `<h3>1. Discord Bot - Ashok Sasitharan</h3>
    <p>One of my recent favorite projects was the creation of a simple discord bot that I made using Node.js</p>
    <img src="./images/discord-bot.PNG" alt="A picture of the discord bot replying to commands">`;

    //Web App
    projectsTextElement = document.getElementById("projects-h3-2");
    projectsTextElement.innerHTML= `<h3>2. Database Web App - Ashok Sasitharan</h3>
    <p>Another one of my favorite projects was the creation of a web app in ASP.NET which stored the data of
    doctors and patients in a database and used that information to create appointments.</p>
    <img src="./images/heart-hospital.PNG" alt="A picture of the hospital web app" width="1024px" height="500">`;

    //cobol project
    projectsTextElement = document.getElementById("projects-h3-3");
    projectsTextElement.innerHTML= `<h3>3. COBOL Project - Ashok Sasitharan</h3>
    <p>My third favorite project was a simple COBOL program that took item input data from a .dat file and created a formatted 
    output file with calculations done for totals.</p>
    <img src="./images/cobol-output.PNG" alt="A picture of the input file and formatted output file" width="1024px" height="600">`;

    let projectsText4Element = document.getElementById("projects-h3-4");
    projectsText4Element.innerHTML =
    `<h3>1. Multi-Text Editor - Jacky Yuan</h3>
    <p>One of my earlier applications that was made in visual basic. It is a relative simple project of creating an multi-page 
      text editor. But I liked it since it was one of the first projects made that had a practical application.
    </p>
    <img src="./images/texteditor1.PNG" alt="sample document in the editor" width="1024px" height="600">`;


    let projectsText5Element = document.getElementById("projects-h3-5");
    projectsText5Element.innerHTML =
    `<h3>2. Salon Webpage - Jacky Yuan</h3>
    <p>An webpage for a salon built in ASP.Net. It is linked to a database allowing for features such as a simple login and 
    registering as a new user or making an appointment.
    </p>
    <img src="./images/FPoBH.PNG" alt="homepage of Fresh Prince of Bel-Hair" width="1024px" height="600">`;

    let projectsText6Element = document.getElementById("projects-h3-6");
    projectsText6Element.innerHTML =
    `<h3>2. Side Scrolling Shooter - Jacky Yuan</h3>
    <p>An older side project was simple side scrolling shooter made in Flash while it was still being supported. Contained
    a hit detection, controls, increasing difficulty, power ups and simple animations.
    </p>
    <img src="./images/flashgame.PNG" alt="Side scrolling shooter game" width="1024px" height="600">`;
}
function displayServices()
{
    
}

function displayContact()
{
    let messageArea = document.getElementById("messageArea");
    messageArea.hidden = true;
    //form validation
    let fullName = document.getElementById("fullName");
        fullName.addEventListener("blur", function() 
        {
            if(fullName.value.length < 2)
            {
                fullName.focus();
                fullName.select();
                messageArea.hidden = false;
                messageArea.textContent = "Please enter an appropriate Name";
            }
            else
            {
                messageArea.removeAttribute("class");
                messageArea.hidden = true;
            }
        });
        

    let sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click", function(event)
    {
        //event.preventDefault();
        let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
        
        if(contact.serialize())
        {
            localStorage.setItem((localStorage.length + 1).toString(), contact.serialize());
        }

    });
}


    function Start()
    {
        console.log("App Started...");

        switch(document.title)
        {
            case "Home":
                displayHome();
                break;
            case "About":
                displayAbout();
                break;
            case "Projects":
                displayProjects();
                break;
            case "Services":
                displayServices();
                break;
            case "Contact":
                displayContact();
                break;

        }
        
    }

    

    window.addEventListener("load", Start);

})();