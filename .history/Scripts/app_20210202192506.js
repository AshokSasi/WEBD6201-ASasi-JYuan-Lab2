/* custom JavaScript goes here */

//IIFE - Immediately Invoked Function Expression
//AKA - Anonymous Self-Executing Function
//Closure - limits scope leak


"use strict";

(function()
{

function displayNavbar()
{
    //Set the nav bar to link to projects.html instead of products.html
    let navbarProductsElement = document.getElementById("nav-products");
    
    
    if (document.title === "Projects")
    {
        
        navbarProductsElement.innerHTML=`<a class="nav-link active" aria-current="page" href="projects.html">
        <i class="fas fa-box fa-lg"></i> Projects</a>`;
    }
    else
    {
        navbarProductsElement.innerHTML=`<a class="nav-link " aria-current="page" href="projects.html">
        <i class="fas fa-box fa-lg"></i> Projects</a>`;
    }
  
    let aboutUsElement = document.getElementById("nav-about");
    let humanResources = `<li id=nav-contact class="nav-item">
    <a class="nav-link" aria-current="page" href="contact.html"><i class="fas fa-phone fa-lg"></i> Human Resources</a>
  </li>`;
  aboutUsElement.after(humanResources);

    
}    

function displayHome()
{
    
    let indexText = "Welcome to Lab 1 by Ashok Sasitharan & Jacky Yuan";
    let indexTextElement = document.getElementById("index-welcome");
    indexTextElement.textContent= indexText;

    indexText = "WEBD6201: Lab 1";
    indexTextElement = document.getElementById("home-title");
    indexTextElement.textContent= indexText;

   
    
 
    //navbarProductsElement.textContent="Projects";
    

}
function displayAbout()
{
    let projectsTextElement = document.getElementById("about-title");
    projectsTextElement.innerHTML= `<h1>About Us</h1>`;

    //About Ashok Sasitharan
    projectsTextElement = document.getElementById("about-ashok");
    projectsTextElement.innerHTML= `<h3>Ashok Sasitharan</h3>
    <p>My name is Ashok Sasitharan, I am 19 years old and I have been programming for 4 years. I am experienced in web 
    development as well as development of Windows Form, and Console Applications.</p>
    <img src="./images/ashok-picture.jpg" alt="A picture of Ashok Sasitharan" width =450 height = 600>`;

    //About Jacky Yuan
    projectsTextElement = document.getElementById("about-jacky");
    projectsTextElement.innerHTML= `<h3>Jacky Yuan</h3>
    <p>My name is Jacky Yuan, I'm 25 years old and I have been working with computer programming since I was in high school. I have always been fascinated by
    computers and how using nothing but numbers and words, we can create all kinds of interesting programs and apps. I started off with creating
    simple games in flash similar to the ones I played online. However, I became more interested in doing more complex programs with more functionality.
    I now have experience with a number of languages such as Java and c# alongside with some experience working on web development, mainframe development
    and windows form applications.    
    </p>
    <img src="./images/jacky-picture.jpg" alt="A picture of Jacky Yuan" width =500 height = 450>`;
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
      text editor. But I liked it since it was one of the first projects I made that have a practical application. Before this point,
      projects were always these abstract console applications with very specialized purposes. This project, however, was memorable since
      it was making something, even if it is a simplified version, that I often used.
    </p>
    <img src="./images/texteditor1.PNG" alt="sample document in the editor" width="1024px" height="600">`;


    let projectsText5Element = document.getElementById("projects-h3-5");
    projectsText5Element.innerHTML =
    `<h3>2. Salon Webpage - Jacky Yuan</h3>
    <p>An simple 5 page website for a salon built in ASP.Net. It is linked to a database allowing for features such as a simple login and 
    registering as a new user or making an appointment. This was a final project for NETD 3202 class, it combined elements of
    other web design with various functionalities programmed in C#. The resulting website looked much more professional than I had initially
    thought it would.
    </p>
    <img src="./images/FPoBH.PNG" alt="homepage of Fresh Prince of Bel-Hair" width="1024px" height="600">`;

    let projectsText6Element = document.getElementById("projects-h3-6");
    projectsText6Element.innerHTML =
    `<h3>2. Side Scrolling Shooter - Jacky Yuan</h3>
    <p>A side project I made, it is simple side scrolling shooter made in Flash while it was still being supported. Flash games were
    a big part of my childhood and I wanted to create something before Flash became unsupported. So I created this simple game, with
    simple keyboard controls, hit detection, scaling difficulty and some simple animations. A fun and nostalgic project as a final nod 
    to something I spent hours upon hours on in my past.
    </p>
    <img src="./images/flashgame.PNG" alt="Side scrolling shooter game" width="1024px" height="600">`;
}
function displayServices()
{
    let projectsTextElement = document.getElementById("services-title");
    projectsTextElement.innerHTML= `<h1>Services</h1>`;

    //Ashok Sasitharan- Web Development
    projectsTextElement = document.getElementById("services-h3-1");
    projectsTextElement.innerHTML= `<h3>Web Development - Ashok Sasitharan</h3>
    <p>One of my strongest skills is creating good looking modern websites that are able to communicate with database using HTML, SQL, PHP, CSS, and JavaScript</p>
    <img src="./images/files.png" alt="A picture of web development icons">
    <p>Author: Alex Anistratov, Title: Files html, css, php, js, <a href="https://www.talkaboutcreative.com.au/cms-html-css-php-js-wtf-know-language-user-love/"> Link</a> </p>`;

        //Ashok Sasitharan- OOP
        projectsTextElement = document.getElementById("services-h3-2");
        projectsTextElement.innerHTML= `<h3>Web Development - Ashok Sasitharan</h3>
        <p>Another one of my strengths is that I am proficient in creating Object Oriented Programs using C++, C#, and Java</p>
        <img src="./images/oop-icon.png" alt="A OOP Icon. ">
        <p>Author: codestation.io, Title: OOP Icon, <a href="https://in.pinterest.com/pin/727823989749361379/"> Link</a> </p>`;
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
        displayNavbar();
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