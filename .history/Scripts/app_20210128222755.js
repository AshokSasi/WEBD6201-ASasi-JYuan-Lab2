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
    
}
function displayProjects()
{
    let projectsText = "Projects";
    let projectsTextElement = document.getElementById("projects-title");
    projectsTextElement.textContent= projectsText;

    let projectsText = "Projects";
    let projectsTextElement = document.getElementById("projects-title");
    projectsTextElement.textContent= projectsText;
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