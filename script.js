document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
      const header = accordion.querySelector(".accordion__header");
      const content = accordion.querySelector(".accordion__content");
      const icon = accordion.querySelector("#star-icon"); // Select the image

      header.addEventListener("click", () => {
          const isOpen = content.style.height === `${content.scrollHeight}px`;

          // Toggle accordion content height
          accordions.forEach((a) => {
              const c = a.querySelector(".accordion__content");
              const ic = a.querySelector("#star-icon");

              c.style.height = a === accordion && !isOpen ? `${c.scrollHeight}px` : "0px";

              // Toggle icon classes for rotation
              ic.classList.toggle("rotate-icon", a === accordion && !isOpen);
          });
      });
  });
});


function openLink(url) {
    window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    var menuButtons = document.querySelectorAll('.menu_buttons a');

    menuButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('data-target');
            var targetElement = document.getElementById(target);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});