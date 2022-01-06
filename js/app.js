addNavBar();
/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

//? Add the NavBar dynamically depending on  the section in the HTML page
function addNavBar() {
  //* get all section in the HTML page
  let sections = document.querySelectorAll("section");

  //* The navbar is an unordered list
  //* create the ul and adding the styling using the css class Name in the skeleton
  const mainList = document.createElement("ul");
  mainList.className = "navbar__menu";

  //* iterating over the returend NodeList of section
  //* and adding the <li> and the <a> each with it's className and appending them to the mainList

  for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    li.className = "navbar__menu";

    let a = document.createElement("a");
    // setting the content of the <a> as the "data-nav" property of the <section>
    a.textContent = `${sections[i].getAttribute("data-nav")}`;
    a.href = `#${sections[i].id}`;
    a.className = "menu__link";

    li.appendChild(a);

    mainList.appendChild(li);
  }

  //* Adding the new mainList to the <header> using it's class Name
  let main_hero = document.querySelector(".main__hero");
  main_hero.insertAdjacentElement("afterbegin", mainList);
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
