// pick all images and lay them based on the z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// we want to keep track of: 1. slide, 2, z-index

let currentSlide = 0
let z = 1

//when i click slide area, change slide based on z-index
slideArea.addEventListener("click", function() {
  currentSlide += 1
  if(currentSlide > images.length - 1) {
    currentSlide = 0
  }
  z += 1
  
  //remove animation from style on every image
  images.forEach(function (image) {
  	image.style.animation = ""
  })
  
  
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})

slideArea.addEventListener("mouseover", function() {
  images.forEach(function (image) {
    const x = 25 * Math.floor(Math.random() * 5) - 50
    const y = 25 * Math.floor(Math.random() * 5) - 50
    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

//when I move my mouse back, put images back
slideArea.addEventListener("mouseout", function() {
  images.forEach(function(image) {
    image.style.transform = ""
  })
})






