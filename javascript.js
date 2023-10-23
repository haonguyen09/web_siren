const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const search = $(".search-icon:first-child") 
const input = $(".search-input")

 search.onclick = function() {
    input.focus();
 }


// next page

const navs = $$(".nav-item");
const pages = $$(".page-item");

navs.forEach((nav, index) => {
   const page = pages[index];

   nav.onclick = function() {
      $(".page-item.active").classList.remove("active")
      page.classList.add('active')
   }
})
