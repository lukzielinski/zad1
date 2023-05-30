const offerts = document.querySelectorAll(".offert");
let currentIndex = 0;
let isHovered = false;

function addActiveClass() {
  offerts[currentIndex].classList.add("active");
}

function removeActiveClass() {
  offerts[currentIndex].classList.remove("active");
}

function changeActiveElement() {
  if (!isHovered) {
    removeActiveClass();
    currentIndex = (currentIndex + 1) % offerts.length;
    addActiveClass();
  }
}

function handleMouseEnter(index) {
  isHovered = true;
  removeActiveClass();
  currentIndex = index;
  addActiveClass();
}

function handleMouseLeave() {
  isHovered = false;
}

offerts.forEach((offert, index) => {
  offert.addEventListener("mouseenter", () => {
    handleMouseEnter(index);
  });

  offert.addEventListener("mouseleave", () => {
    handleMouseLeave();
  });
});

addActiveClass();
setInterval(changeActiveElement, 2000);
