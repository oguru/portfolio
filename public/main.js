// const getArrows = document.getElementsByClassName("arrow");

// class Arrow {
// constructor(id) {
//    this.arrows = [       
//       // id="${id}"         
//       `<span  class="arrowspan"></span>`,
//       `<span class="arrowspan"></span>`,
//       `<span class="arrowspan"></span>`
//    ];
// }

//    showArrow = () => {
//       this.arrows[0].classList.add("borderClass");
//       this.arrows[1].classList.add("borderClass");
//       this.arrows[2].classList.add("borderClass");
//    };

//    removeArrow = () => {
//       this.arrows[0].classList.remove("borderClass");
//       this.arrows[1].classList.remove("borderClass");
//       this.arrows[2].classList.remove("borderClass");
//    };

//    }

//    createArrows = id => new Arrow(id);
// const newArrow = new Arrow;
// console.log(newArrow.arrows);


// renderArrow = () => {
//    return (
//       <div class="arrow">
//                 <span class="arrowspan"></span>
//                 <span class="arrowspan"></span>
//                 <span class="arrowspan"></span>
//            </div>
//    )
// }



const arrows = document.getElementsByClassName("arrowspan");

showArrow = () => {
   arrows[0].classList.add("borderClass");
   // arrows[1].classList.add("borderClass");
   // arrows[2].classList.add("borderClass");
   // arrows[3].classList.add("borderClass");
   // arrows[4].classList.add("borderClass");
   // arrows[5].classList.add("borderClass");
}

removeArrow = () => {
   arrows[0].classList.remove("borderClass");
   // arrows[1].classList.remove("borderClass");
   // arrows[2].classList.remove("borderClass");
   // arrows[3].classList.remove("borderClass");
   // arrows[4].classList.remove("borderClass");
   // arrows[5].classList.remove("borderClass");
}

const navBar = document.querySelector("#nav-btn-anim");

const closeNav = () => {
   navBar.classList.remove("nav-hover")
   setTimeout(() => navBar.classList.add("nav-hover")
      , 1000);
}

const returnToTop = () => {
   window.scrollTo(0, 0)
   closeNav();
}

const navIcon = document.querySelector("#nav-icon");
const navLines = document.querySelectorAll(".nav-line");
const navText = document.querySelectorAll(".nav-text");

const moveNav = () => {

   navIcon.classList.add("moveNavIcon");

   for (let i = 0; i < 3; i++) {
      navLines[i].classList.add("navLineAnimate")
   }

   for (let i = 0; i < navText.length; i++) {
      navText[i].classList.add("bottom-zero");
   }
}

const returnNav = () => {

   navIcon.classList.remove("moveNavIcon");

   for (let i = 0; i < 3; i++) {
      navLines[i].classList.remove("navLineAnimate")
   }

   for (let i = 0; i < navText.length; i++) {
      navText[i].classList.remove("bottom-zero");
   }
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



// renderArrow = () => {
//    return (
//       <div class="arrow">
//                 <span class="arrowspan"></span>
//                 <span class="arrowspan"></span>
//                 <span class="arrowspan"></span>
//            </div>
//    )
// }




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