let $= document;
let navBar = $.querySelector(`.navBar`);

$.addEventListener(`scroll`, event=>{
  console.log($.documentElement.scrollTop)
  if ($.documentElement.scrollTop != 0){
    navBar.classList.remove(`h-20`)
    navBar.style.height= `60px`
    navBar.style.backgroundColor= `#a1a1fd`
  }else if ($.documentElement.scrollTop == 0){
    navBar.classList.add(`h-20`)
    navBar.style.height= ``
    navBar.style.backgroundColor= ``
  }
})