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
   arrows[1].classList.add("borderClass");
   arrows[2].classList.add("borderClass");
   arrows[3].classList.add("borderClass");
   arrows[4].classList.add("borderClass");
   arrows[5].classList.add("borderClass");
}

removeArrow = () => {
   arrows[0].classList.remove("borderClass");
   arrows[1].classList.remove("borderClass");
   arrows[2].classList.remove("borderClass");
   arrows[3].classList.remove("borderClass");
   arrows[4].classList.remove("borderClass");
   arrows[5].classList.remove("borderClass");
}

const navIcon = document.getElementById("nav-icon");
const navLines = document.getElementsByClassName("nav-line");
const navText = document.getElementsByClassName("nav-text");

const moveNav = () => {
   navIcon.classList.add("moveNavIcon");
   navLines[0].classList.add("navLineAnimate")
   navLines[1].classList.add("navLineAnimate")
   navLines[2].classList.add("navLineAnimate")
   navText[0].classList.add("bottom-zero")
   navText[1].classList.add("bottom-zero")
   navText[2].classList.add("bottom-zero")
   navText[3].classList.add("bottom-zero")
}

const returnNav = () => {
   navIcon.classList.remove("moveNavIcon");
   navLines[0].classList.remove("navLineAnimate")
   navLines[1].classList.remove("navLineAnimate")
   navLines[2].classList.remove("navLineAnimate")
   navText[0].classList.remove("bottom-zero")
   navText[1].classList.remove("bottom-zero")
   navText[2].classList.remove("bottom-zero")
   navText[3].classList.remove("bottom-zero")
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