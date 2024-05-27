const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
                              
const btnScrollToTop = document.querySelector("#btnScrollToTop");
      
btnScrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});