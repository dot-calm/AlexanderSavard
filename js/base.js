
var menuOpen = false;

function menuDrop() {
   if (!menuOpen) {
      document.getElementById("main-body").addEventListener('click', closeNav);
   } else {
      document.getElementById("main-body").removeEventListener('click', closeNav);
   }

   menuOpen = !menuOpen;

   var ownership = document.getElementById("ownership");
   ownership.classList.toggle("opaque");

   var menuIcon = document.getElementById("hamburger");
   menuIcon.classList.toggle("open");

   var menuList = document.getElementById("mainmenu");
   menuList.classList.toggle("open")

}

function closeNav() {
   document.getElementById("main-body").removeEventListener('click', closeNav);
   menuDrop();
}




function subnavDrop() { 
	var ownership = document.getElementById("subnav-anchor");
	ownership.classList.toggle("open");

	var ownership = document.getElementById("section-items");
	ownership.classList.toggle("open");

	var ownership = document.getElementById("subnav-anchor");
	ownership.classList.toggle("active");
}

function sosHover() {
   $("#sos").toggleClass("hovered");
   $("#sos button").toggleClass("hovered");
}
function sospopHover() {
   $("#sos-pop").toggleClass("hovered");
   $("#sos-pop button").toggleClass("hovered");
}
function powaHover() {
   $("#powa").toggleClass("hovered");
   $("#powa button").toggleClass("hovered");
}
function tangoHover() {
   $("#tango").toggleClass("hovered");
   $("#tango button").toggleClass("hovered");
}
function gauxHover() {
   $("#ga-ux").toggleClass("hovered");
   $("#ga-ux button").toggleClass("hovered");
}
function nysearchHover() {
   $("#nysearch").toggleClass("hovered");
   $("#nysearch button").toggleClass("hovered");
}
function vicHover() {
   $("#vic").toggleClass("hovered");
   $("#vic button").toggleClass("hovered");
}
function ndiHover() {
   $("#ndi").toggleClass("hovered");
   $("#ndi button").toggleClass("hovered");
}
function clphaHover() {
   $("#clpha").toggleClass("hovered");
   $("#clpha button").toggleClass("hovered");
}




function scrollSections() {
   var sections = Array.prototype.slice.call(document.getElementsByClassName('scroll-section'));
   var navMenu = Array.prototype.slice.call(document.getElementById('section-items').children);
   function scrollHandler() {
      var scrolledInto = sections.findIndex(function (item, index) {
         var bounds = item.getBoundingClientRect();
         return bounds.top <= 400 && Math.abs(bounds.top) < bounds.height - 325; 
      });
      navMenu.forEach(function (item) {
         item.children[0].classList.remove('active');
      });
      if (scrolledInto >= 0) {
         navMenu[scrolledInto].children[0].classList.add('active');
      }
   };

   window.addEventListener('scroll', scrollHandler);
}

scrollSections();
