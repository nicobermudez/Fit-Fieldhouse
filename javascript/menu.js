const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")

//when I click toggleTag, toggle a class of open on main tag
//and if it's open make the toggle class say closed
// and if not make the toggleTag say open

toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open")
  navTag.classList.toggle("open")
  
  if(mainTag.classList.contains("open")) {
     toggleTag.innerHTML = `<img src="close.svg">Close`
  } else {
    toggleTag.innerHTML = `<img src="menu.svg">Menu`
  } 
})
