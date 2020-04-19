//Global
let viewWidth = document.getElementsByTagName("body")[0].clientWidth;

window.onload = function () {
   document.getElementsByClassName('contact-form')[0].addEventListener('submit', function (event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('gmail', 'portfolio', this);
   });
}

const ignorePointer = (ele, index) => {
   if (index) {
      ele[index].classList.add("ignore-mouse");
   }
   else {
      ele.classList.add("ignore-mouse");
   }
};

const resumePointer = (ele, index) => {
   if (index) {
      ele[index].classList.remove("ignore-mouse");
   }
   else {
      ele.classList.remove("ignore-mouse");
   }
};


//Arrows under bottom nav buttons

const arrows = document.getElementsByClassName("arrowspan");

showArrow = (index) => {
   arrows[index].classList.add("borderClass");
}
removeArrow = (index) => {
   arrows[index].classList.remove("borderClass");
}

//Navbar elements and functions

const navBar = document.querySelector("#nav-btn-anim");
const navIcon = document.querySelector("#nav-icon");
const navLines = document.querySelectorAll(".nav-line");
const navText = document.querySelectorAll(".nav-text");
const botNav = document.querySelector("#bot-navbar");

const closeNav = () => {
   // if (viewWidth < 768)
   navBar.classList.remove("nav-hover");
   ignorePointer(navBar);
   setTimeout(() => {
      resumePointer(navBar);
      navBar.classList.add("nav-hover");
   }, 1000)
}

const clickNavLink = (link) => {
   closeNav();
   setTimeout(() => {
      window.location.assign(`https://peterdev.co.uk/${link}`);
      // window.location.assign(`http://127.0.0.1:5501/public/index.html${link}`);

   }, 1000);
}

const returnToTop = () => {
   ignorePointer(botNav);
   ignorePointer(navBar);
   closeNav();
   setTimeout(() => {
      resumePointer(navBar);
      resumePointer(botNav);
   }, 1000)

   returnBotNav();
   if (viewWidth < 768) {
      setTimeout(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }), 1000);
   }
   else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
   }
}


// let navOpenCheck = false;

const moveNav = () => {

   navIcon.classList.add("moveNavIcon");

   for (let i = 0; i < 3; i++) {
      navLines[i].classList.add("navLineAnimate");
   }

   for (let i = 0; i < navText.length; i++) {
      navText[i].classList.add("bottom-zero");
      // navText[i].classList.add("ignore-mouse");
   }

   // const remIgnoreMouse = () => {
   //    for (let i = 0; i < navText.length; i++) {
   //       navText[i].classList.remove("ignore-mouse");
   //    }
   // }

   // setTimeout(() => {
   //    navOpenCheck = true;
   // }, 500);

   // setTimeout(() => {
   //    if (navOpenCheck === true) {
   //       remIgnoreMouse();
   //    }
   //    else {
   //       return
   //    }
   // }, 500);

   // console.log(navText[0].classList.contains("nav-open-check"));



   // navText[0].classList.contains("nav-open-check") ? remIgnoreMouse() : null;

   // setTimeout(() => {
   //    for (let i = 0; i < navText.length; i++) {
   //       navText[i].classList.remove("ignore-mouse");
   //    }
   // }, 1000);
}

const returnNav = () => {

   if (viewWidth < 768) {
      navBar.classList.add("nav-delay");
      navIcon.classList.add("nav-delay");
      setTimeout(() => {
         navBar.classList.remove("nav-delay");
         navIcon.classList.remove("nav-delay");
      }, 500);
   }

   else {
      navBar.classList.remove("nav-delay");
      navIcon.classList.remove("nav-delay");
   }

   navIcon.classList.remove("moveNavIcon");
   for (let i = 0; i < 3; i++) {
      navLines[i].classList.remove("navLineAnimate")
   }

   for (let i = 0; i < navText.length; i++) {
      navText[i].classList.remove("bottom-zero");
   }
}

const setViewWidth = () => {
   viewWidth = document.getElementsByTagName("body")[0].clientWidth;
   returnNav();
}

const goToTopIcon = document.querySelector("#go-to-top-icon");
const botNavText = document.querySelector("#top-txt");

const moveBotNav = () => {
   goToTopIcon.classList.add("moveGoToTopIcon");

   for (let i = 3; i < 6; i++) {
      navLines[i].classList.add("navLineAnimate")
   }

   botNavText.classList.add("move-bot-nav-txt");
}

const returnBotNav = () => {
   goToTopIcon.classList.remove("moveGoToTopIcon");

   for (let i = 3; i < 6; i++) {
      navLines[i].classList.remove("navLineAnimate")
   }

   botNavText.classList.remove("move-bot-nav-txt");
}

const projects = document.querySelectorAll(".project-info");

const getProjectIco = (projectId) => document.getElementById(projectId);
const getCodeIco = (codeId) => document.getElementById(codeId);
const getProjectBox = () => document.querySelectorAll(".project-info");
const getProjectParent = () => document.querySelectorAll(".project-parent");
const getProjectDesc = () => document.querySelectorAll('.proj-title-desc');
const getProjectConc = () => document.querySelectorAll('.concepts');
const getProjectOverlay = () => document.querySelectorAll('.project-bg-overlay');
const getProjectContent = () => document.querySelectorAll('.project-content');
const getProjectImg = () => document.querySelectorAll('.project-img');

// const addAnimClasses = 

const animateBoxOn = (codeId, projectId, index) => {
   const codeIcon = getCodeIco(codeId);
   const projectIcon = getProjectIco(projectId);
   const projectBox = getProjectBox()[index];
   const projectParent = getProjectParent()[index];
   const projectDesc = getProjectDesc()[index];
   const projectConc = getProjectConc()[index];
   const projectOverlay = getProjectOverlay()[index];
   const projectContent = getProjectContent()[index];
   const projectImg = getProjectImg()[index];

   projectBox.classList.remove("box-anim-out");
   projectParent.classList.remove("box-anim-out");
   projectOverlay.classList.remove("box-anim-out");
   projectContent.classList.remove("box-anim-out");
   projectImg.classList.remove("box-anim-out");
   codeIcon.classList.remove("icon-anim-out");
   projectIcon.classList.remove("icon-anim-out");
   projectDesc.classList.remove("desc-anim-out");
   projectConc.classList.remove("conc-anim-out");

   projectBox.classList.add("box-anim-in");
   projectParent.classList.add("box-anim-in");
   projectOverlay.classList.add("box-anim-in");
   projectContent.classList.add("box-anim-in");
   projectImg.classList.add("box-anim-in");
   codeIcon.classList.add("icon-anim-in");
   projectIcon.classList.add("icon-anim-in");
   projectDesc.classList.add("desc-anim-in");
   projectConc.classList.add("conc-anim-in");
};

const animateBoxOff = (codeId, projectId, index) => {

   const codeIcon = getCodeIco(codeId);
   const projectIcon = getProjectIco(projectId);
   const projectBox = getProjectBox()[index];
   const projectParent = getProjectParent()[index];
   const projectDesc = getProjectDesc()[index];
   const projectConc = getProjectConc()[index];
   const projectOverlay = getProjectOverlay()[index];
   const projectContent = getProjectContent()[index];
   const projectImg = getProjectImg()[index];

   // projectBox.classList.remove("box-anim-in");
   // projectParent.classList.remove("box-anim-in");
   // projectOverlay.classList.remove("box-anim-in");
   // projectContent.classList.remove("box-anim-in");
   // projectImg.classList.remove("box-anim-in");
   // codeIcon.classList.remove("icon-anim-in");
   // projectIcon.classList.remove("icon-anim-in");
   // projectDesc.classList.remove("desc-anim-in");
   // projectConc.classList.remove("conc-anim-in");

   projectBox.classList.add("box-anim-out");
   projectParent.classList.add("box-anim-out");
   projectOverlay.classList.add("box-anim-out");
   projectContent.classList.add("box-anim-out");
   projectImg.classList.add("box-anim-out");
   codeIcon.classList.add("icon-anim-out");
   projectIcon.classList.add("icon-anim-out");
   projectDesc.classList.add("desc-anim-out");
   projectConc.classList.add("conc-anim-out");
}

const spinOut = (iconName) => {
   const hoverState = document.getElementById(iconName).childNodes;
   hoverState[3].classList.remove("spin-out");
   hoverState[1].classList.remove("return-ico");
   hoverState[1].classList.add("spin-out");
   hoverState[3].classList.add("return-ico");
}

const returnDefault = (iconName) => {
   const defaultState = document.getElementById(iconName).childNodes;
   defaultState[1].classList.remove("spin-out");
   defaultState[1].classList.add("return-ico");
   defaultState[3].classList.remove("return-ico");
   defaultState[3].classList.add("spin-out");
}

const getBlog = name => document.getElementById(name);
const getBlogContent = blog => blog.querySelectorAll(".modal-content");
const getBlogContainer = () => document.querySelectorAll(".blog-post");
const getBlogButton = () => document.querySelectorAll(".close-modal")

const showBlog = (name, index) => {
   const blogContainer = getBlogContainer()[index];
   if (blogContainer.classList.contains("ignore-mouse")) {
      null;
   }
   else {
      document.getElementsByTagName("body")[0].classList.add("no-scroll");

      const blog = getBlog(name);
      const blogContent = getBlogContent(blog);
      ignorePointer(blogContainer);
      blog.classList.remove("hide-blog");
      const blogButton = getBlogButton()[index]

      blogButton.classList.add("show-blog-btn")
      blog.classList.add("show-blog");
      for (let i = 0; i < blogContent.length; i++) {
         blogContent[i].classList.add("show-modal-content")
      };
      console.log("showblog");
   }
}

const closeBlog = (name, index) => {
   console.log("closeblog");

   const blogContainer = getBlogContainer()[index];


   const blog = getBlog(name);
   const blogContent = getBlogContent(blog)

   blog.classList.remove("show-blog");
   void blog.offsetWidth;
   blog.classList.add("hide-blog");
   for (let i = 0; i < blogContent.length; i++) {
      blogContent[i].classList.remove("show-modal-content")
   };
   setTimeout(() => {
      resumePointer(blogContainer);
      blog.classList.remove("hide-blog");
      document.getElementsByTagName("body")[0].classList.remove("no-scroll")
   }, 2000);
}



// // The checker
// const gambitGalleryIsInView = el => {
// 	const scroll = window.scrollY || window.pageYOffset
// 	const boundsTop = el.getBoundingClientRect().top + scroll

// 	const viewport = {
// 		top: scroll,
// 		bottom: scroll + window.innerHeight,
// 	}

//     const bounds = {
// 		top: boundsTop,
// 		bottom: boundsTop + el.clientHeight,
// 	}

// 	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
// 		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
// }


// // Usage.
// document.addEventListener( 'DOMContentLoaded', () => {
// 	const topPoint = document.querySelector( '.left-panel' )
// 	const about = document.querySelector( '.bot-mid-button' )

// 	const handler = () => raf( () => {
// 		about.innerHTML = 'Is the div visible? ' + ( gambitGalleryIsInView( topPoint ) ? 'Yes' : 'No' )
// 	} )

// 	handler()
// 	window.addEventListener( 'scroll', handler )
// } )

// // requestAnimationFrame
// const raf = 
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     function( callback ) {
//         window.setTimeout( callback, 1000 / 60 )
//     }