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

//* get all section in the HTML page
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function addClass(i) {
  console.log("addclass")
  sections[i].classList.add("your-active-class");
  document.getElementById(`li_${i}`).classList.add("highlight");
  
  // console.log(document.getElementById(`li_${i}`));
  console.log(`li_${i}`);
}
function removeClass(i) {
  document.getElementById(`li_${i}`).classList.remove("highlight");
  sections[i].classList.remove("your-active-class");
}
/**
 * End Helper Functions
 */
/**
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

//? Add the NavBar dynamically depending on  the section in the HTML page
function addNavBar() {
  //* The navbar is an unordered list
  //* create the ul and adding the styling using the css class Name in the skeleton
  const mainList = document.createElement("ul");
  mainList.className = "navbar__menu";

  //* iterating over the returend NodeList of section
  //* and adding the <li> and the <a> each with it's className and appending them to the mainList

  for (let i = 0; i < sections.length; i++) {
    const li = document.createElement("li");
    li.className = "navbar__menu";
    li.id = `li_${i}`;

    let a = document.createElement("a");
    // setting the content of the <a> as the "data-nav" property of the <section>
    a.textContent = `${sections[i].getAttribute("data-nav")}`;
    a.href = `#${sections[i].id}`;
    a.className = "menu__link";
    a.id = `a_${i}`;
    a.onclick = function (e) {
      addClass(e.target.id - 1);
    };

    li.appendChild(a);

    mainList.appendChild(li);
  }

  //* Adding the new mainList to the <header> using it's class Name
  let main_hero = document.querySelector(".page__header");
  main_hero.insertAdjacentElement("afterbegin", mainList);
}

function setActive() {
  //find the percentage of each element on the screen
  //and add to class "active" to the max
  let max = -1;
  let maxIndex = -1;

  for (let index = 0; index < sections.length; index++) {
    const rect = sections[index].getBoundingClientRect();
    const perc = sections[index].clientHeight / Math.abs(rect.y);
    if (max <= perc) {
      max = perc;
      maxIndex = index;
    }

    // removing the class "active" from the !max and adding it to the max

    for (let index = 0; index < sections.length; index++) {
      if (index != maxIndex) {
        removeClass(index);
      } else {
        addClass(index);
      }
    }
  }
  // NOTE: tried to do it without any loops but the class didnt be removed if not in view port
}

window.addEventListener("scroll", setActive);
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
addNavBar();

// Scroll to section on link click
// Dont need dom manipulation-> just use the <a> and the href is the ID of the section
// for the smooth scrolling (just add in the css file "scroll-behavior: smooth")
// Set sections as active

// failed attempt without loops
// function inView(el) {
//   let rect = el.getBoundingClientRect();
//   return (rect.top >= 0 && window.innerHeight>rect.bottom);
// }
// function setActive() {
//   for (let section of sections) {
//     if (!inView(section)) {
//     //   if (!section.classList.contains("your-active-class")) {
//         section.classList.add("your-active-class");
//         console.log(section.getAttribute("id"))
//     //   }
//     } else {
//       section.classList.remove("your-active-class");
//     }
//   }
// }
