/* custom JavaScript goes here */
/*
Name: Ashok Sasitharan 100745484, Jacky Yuan 100520106
Date: February 03 2021
File: app.js

*/
"use strict";

(function () {
  /**
   * Changes Products link in nav bar to Projects and injects Human Resource link into navbar
   */
  function displayNavbar() {
    //Set the nav bar to link to projects.html instead of products.html
    let navbarProductsElement = document.getElementById("nav-products");

    // Checks to see if the user is on the projects page and sets the nav link to active
    if (document.title === "Projects") {
      navbarProductsElement.innerHTML = `<a class="nav-link active" aria-current="page" href="projects.html">
        <i class="fas fa-box fa-lg"></i> Projects</a>`;
    } else {
      navbarProductsElement.innerHTML = `<a class="nav-link " aria-current="page" href="projects.html">
        <i class="fas fa-box fa-lg"></i> Projects</a>`;
    }

    // Create Human Resources Link
    let navbarAboutElement = document.getElementById("nav-about");
    let humanResourcesLi = document.createElement("li");
    humanResourcesLi.setAttribute("id", "nav-human-resources");
    let mainContent = document.getElementById("nav-list");
    mainContent.appendChild(humanResourcesLi);

    // Checks to see if the user is on the human resources page and sets the nav link to active
    if (document.title === "HR") {
      humanResourcesLi.innerHTML = `<a class="nav-link active" aria-current="page" href="human-resources.html"><i class="fas fa-user-tie fa-lg"></i> Human Resources</a>`;
    } else {
      humanResourcesLi.innerHTML = `<a class="nav-link " aria-current="page" href="human-resources.html"><i class="fas fa-user-tie fa-lg"></i> Human Resources</a>`;
    }
    //Injects the human resources link after the about link
    navbarAboutElement.after(humanResourcesLi);
  }

  /**
   * Creates Footer element and inject it at the bottom of the page
   */
  function displayFooter() {
    let footerElement = document.createElement("nav");
    footerElement.setAttribute(
      "class",
      "navbar fixed-bottom navbar-dark bg-dark"
    );
    footerElement.innerHTML = `<div class="container-fluid">
    <h4 class="footerContent"><i class="far fa-copyright"></i> Copyright 2021</h4>
  </div>`;
    let footerContent = document.getElementsByTagName("footer")[0];
    footerContent.appendChild(footerElement);
  }

  /**
   * Inject body text and header into the home page
   */
  function displayHome() {
    let indexText = `<p>Welcome to Lab 1 by Ashok Sasitharan & Jacky Yuan. Here we have pages that
     showcase our programming prowess with info about our previous projects as well as some information about ourselves.</p>`;
    let indexTextElement = document.getElementById("index-welcome");
    indexTextElement.innerHTML = indexText;

    indexText = "WEBD6201: Lab 1";
    indexTextElement = document.getElementById("home-title");
    indexTextElement.textContent = indexText;

    let comicElement = document.getElementById("comic");
    comicElement.innerHTML = `<img src="./images/comic.jpeg" alt="programmer comic" width="500" class="center">
    <p class="textcenter">Author: Mart Virkus, Title: How to Build a Horse with Programming, <a href="https://imgur.com/gallery/60QYd"> Link</a> </p>
    <br/>`;
    
  }

  /**
   * Injects page content into About page
   */
  function displayAbout() {
    let projectsTextElement = document.getElementById("about-title");
    projectsTextElement.innerHTML = `<h1>About Us</h1>`;

    //About Ashok Sasitharan
    projectsTextElement = document.getElementById("about-ashok");
    projectsTextElement.innerHTML = `<h3>Ashok Sasitharan</h3>
    <p>My name is Ashok Sasitharan, I am 19 years old and I have been programming for 4 years. I am experienced in web 
    development using languages like HTML, PHP, CSS, and JavaScript as well as development of Windows Form, and Console Applications in C#, C++, Java.</p>
    <a href="./documents/Ashok-Sasitharan-Resume.pdf" download>
   <p class="resume-link">Here is a link to my Resume!</p>
    </a>
    <img src="./images/ashok-picture.jpg" alt="A picture of Ashok Sasitharan" width =450 height = 600>`;

    //About Jacky Yuan
    projectsTextElement = document.getElementById("about-jacky");
    projectsTextElement.innerHTML = `<h3>Jacky Yuan</h3>
    <p>My name is Jacky Yuan, I'm 25 years old and I have been working with computer programming since I was in high school. I have always been fascinated by
    computers and how using nothing but numbers and words, we can create all kinds of interesting programs and apps. I started off with creating
    simple games in flash similar to the ones I played online. However, I became more interested in doing more complex programs with more functionality.
    I now have experience with a number of languages such as Java and c# alongside with some experience working on web development, mainframe development
    and windows form applications.    
    </p>
    <a href="./documents/Jacky_Yuan_Resume.pdf" download>
    <p class="resume-link">Here is a link to my Resume!</p>
     </a>
    <img src="./images/jacky-picture.jpg" alt="A picture of Jacky Yuan" width =500 height = 450>`;
  }

  /**
   * Injects site content into Projects page
   */
  function displayProjects() {
    let projectsTextElement = document.getElementById("projects-title");
    projectsTextElement.innerHTML = `<h1>Projects</h1>`;

    projectsTextElement = document.getElementById("projects-p1");
    projectsTextElement.innerHTML = `<p>Below are some of our favorite projects!!</p>`;

    //Discord Bot - Ashok Sasitharan
    projectsTextElement = document.getElementById("projects-h3-1");
    projectsTextElement.innerHTML = `<h3>1. Discord Bot - Ashok Sasitharan</h3>
    <p>One of my recent favorite projects was the creation of a simple discord bot that I made using Node.js</p>
    <img src="./images/discord-bot.PNG" alt="A picture of the discord bot replying to commands">`;

    //Web App - Ashok Sasitharan
    projectsTextElement = document.getElementById("projects-h3-2");
    projectsTextElement.innerHTML = `<h3>2. Database Web App - Ashok Sasitharan</h3>
    <p>Another one of my favorite projects was the creation of a web app in ASP.NET which stored the data of
    doctors and patients in a database and used that information to create appointments.</p>
    <img src="./images/heart-hospital.PNG" alt="A picture of the hospital web app" width="1024px" height="500">`;

    //cobol project - Ashok Sasitharan
    projectsTextElement = document.getElementById("projects-h3-3");
    projectsTextElement.innerHTML = `<h3>3. COBOL Project - Ashok Sasitharan</h3>
    <p>My third favorite project was a simple COBOL program that took item input data from a .dat file and created a formatted 
    output file with calculations done for totals.</p>
    <img src="./images/cobol-output.PNG" alt="A picture of the input file and formatted output file" width="1024px" height="600">`;

    //Multi-Text Editor - Jacky Yuan
    let projectsText4Element = document.getElementById("projects-h3-4");
    projectsText4Element.innerHTML = `<h3>1. Multi-Text Editor - Jacky Yuan</h3>
    <p>One of my earlier applications that was made in visual basic. It is a relative simple project of creating an multi-page 
      text editor. But I liked it since it was one of the first projects I made that have a practical application. Before this point,
      projects were always these abstract console applications with very specialized purposes. This project, however, was memorable since
      it was making something, even if it is a simplified version, that I often used.
    </p>
    <img src="./images/texteditor1.PNG" alt="sample document in the editor" width="1024px" height="600">`;

     //Salon Webpage - Jacky Yuan
    let projectsText5Element = document.getElementById("projects-h3-5");
    projectsText5Element.innerHTML = `<h3>2. Salon Webpage - Jacky Yuan</h3>
    <p>An simple 5 page website for a salon built in ASP.Net. It is linked to a database allowing for features such as a simple login and 
    registering as a new user or making an appointment. This was a final project for NETD 3202 class, it combined elements of
    other web design with various functionalities programmed in C#. The resulting website looked much more professional than I had initially
    thought it would.
    </p>
    <img src="./images/FPoBH.PNG" alt="homepage of Fresh Prince of Bel-Hair" width="1024px" height="600">`;

    //Side Scrolling Shooter - Jacky Yuan
    let projectsText6Element = document.getElementById("projects-h3-6");
    projectsText6Element.innerHTML = `<h3>3. Side Scrolling Shooter - Jacky Yuan</h3>
    <p>A side project I made, it is simple side scrolling shooter made in Flash while it was still being supported. Flash games were
    a big part of my childhood and I wanted to create something before Flash became unsupported. So I created this simple game, with
    simple keyboard controls, hit detection, scaling difficulty and some simple animations. A fun and nostalgic project as a final nod 
    to something I spent hours upon hours on in my past.
    </p>
    <img src="./images/flashgame.PNG" alt="Side scrolling shooter game" width="1024px" height="600">`;
  }

  /**
   * Injects site content into Services page
   */
  function displayServices() {
    let projectsTextElement = document.getElementById("services-title");
    projectsTextElement.innerHTML = `<h1>Services</h1>`;

    //Ashok Sasitharan- Web Development
    projectsTextElement = document.getElementById("services-h3-1");
    projectsTextElement.innerHTML = `<h3>Web Development - Ashok Sasitharan</h3>
    <p>One of my strongest skills is creating good looking modern websites that are able to communicate with database using HTML, SQL, PHP, CSS, and JavaScript</p>
    <img src="./images/files.png" alt="A picture of web development icons">
    <p>Author: Alex Anistratov, Title: Files html, css, php, js, <a href="https://www.talkaboutcreative.com.au/cms-html-css-php-js-wtf-know-language-user-love/"> Link</a> </p>`;

    //Ashok Sasitharan- OOP
    projectsTextElement = document.getElementById("services-h3-2");
    projectsTextElement.innerHTML = `<h3>Object Oriented Programming - Ashok Sasitharan</h3>
        <p>Another one of my strengths is that I am proficient in creating Object Oriented Programs using C++, C#, and Java</p>
        <img src="./images/oop-icon.png" alt="A OOP Icon. ">
        <p>Author: codestation.io, Title: OOP Icon, <a href="https://in.pinterest.com/pin/727823989749361379/"> Link</a> </p>`;

    //Ashok Sasitharan- Web Applications
    projectsTextElement = document.getElementById("services-h3-3");
    projectsTextElement.innerHTML = `<h3>Web Applications - Ashok Sasitharan</h3>
         <p>Finally another one of my strengths is that I am experienced in creating Web Applications using ASP.NET Core that work with databases 
         as well as deploying web apps with Azure.
         </p>
         <img src="./images/net-core.png" alt=".NET Core logo." width="200" height="200">
         <p>Author: Wikimedia Commons, Title: NET Core Logo, <a href="https://commons.wikimedia.org/wiki/File:.NET_Core_Logo.svg"> Link</a> </p>`;

    //Jacky Yuan - Database Skills
    projectsTextElement = document.getElementById("services-h3-4");
    projectsTextElement.innerHTML = `<h3>Database Skills - Jacky Yuan</h3>
         <p>One of my strengths is that I am proficient working with databases. I am experience with utilizing SQL to implement and 
         interface with a database in my projects. I am also comfortable with database design to eliminate redundancies and provide
         concise data.</p>
         <img src="./images/sql-database.jpg" alt="SQL database. " width="700px" height="300">
         <p>Author: Eleni Markou - blendo.co, Title: SQL database, <a href="https://www.blendo.co/blog/sql-table-and-data-partitioning-how-to/"> Link</a> </p>`;

    //Jacky Yuan - System development life cycle
    projectsTextElement = document.getElementById("services-h3-5");
    projectsTextElement.innerHTML = `<h3>System Development Life Cycle - Jacky Yuan</h3>
        <p>Another one of my strengths is that I am experienced with applying the SDLC concepts and models into
        many of my projects. In particular, waterfall, prototyping, and SCRUM methodologies have all been utilized throughout my various projects.</p>
        <img src="./images/SDLC.png" alt="SDLC cycle. ">
        <p>Author: javatpoint.com, Title: SDLC cycle, <a href="https://www.javatpoint.com/software-engineering-software-development-life-cycle"> Link</a> </p>`;

    //Jacky Yuan - Mainframe Development
    projectsTextElement = document.getElementById("services-h3-6");
    projectsTextElement.innerHTML = `<h3>Mainframe Development - Jacky Yuan</h3>
         <p>Lastly, alongside many of the more common programming languages like python or c#, I also have experience with so older languages
         like cobol which is still used in many mainframe systems across the world.</p>
         <img src="./images/60COBOL.jpg" alt="A cobol Icon. ">
         <p>Author: Que mangus - blog.microfocus.com, Title: cobol Icon, <a href="https://blog.microfocus.com/cobol-is-60/"> Link</a> </p>`;
  }

  /**
   * Injects site content into Human Resources page
   */
  function displayHR() {
    let hrContent = document.createElement("h1");
    hrContent.setAttribute("id", "hr-title");
    let mainContent = document.getElementsByTagName("main")[0];
    mainContent.appendChild(hrContent);
    hrContent.textContent = "Human Resources";
    hrContent.className = "gradientBg";
  }

  /**
   * Injects site content into Projects page
   */
  function displayContact() {
    //Contact page header injection
    let contactTextElement = document.getElementById("contact-title");
    contactTextElement.innerHTML = `<h1>Contact Us</h1>`;

    //get the submit button
    let sendButton = document.getElementById("sendButton");
    //Redirect the user to the home page if the user clicks the submit button
    sendButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "index.html";
    });
  }

 function displayLogin()
  {
   
   
   
   
   

  }

  function toggleLogin()
  {
    $("#loginButton").on("click", function(){
      //swap login for logout
      $("#nav-login").html(
       `<a id="nav-logout" class="nav-link" aria-current="page" href="#"><i class="fas fa-sign-in-alt fa-lg"></i> Logout</a>`
     );
     
   });
  }

  /**
   * //Start function that checks for the page title and call the appropriate functions related to the pages.
   */
  function Start() {
    console.log("App Started...");

    displayNavbar();

    switch (document.title) {
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
      case "HR":
        displayHR();
        break;
        case "Login":
          displayLogin();
          break;
    }
  //  toggleLogin();
    displayFooter();
  }

  //Call the start function when the site loads
  window.addEventListener("load", Start);
})();
