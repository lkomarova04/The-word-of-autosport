//Двиганье задней картинки
document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .01}deg;
		`
	})
})

// Бургер-меню

const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })


// Движение картинки за курсором

document.querySelectorAll('.cursor').forEach(node => {
	document.addEventListener('mousemove', e => {
		node.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
	})
})


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('.input');

    inputFields.forEach(input => {
        input.addEventListener('input', function() {
            const label = input.previousElementSibling;

            if (input.value !== '') {
                label.style.opacity = '0';
                label.style.transform = 'translateY(-50%)';
            } else {
                label.style.opacity = '1';
                label.style.transform = 'translateY(0)';
            }
        });
    });
});