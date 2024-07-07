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


function openLink() {
    var url = 'https://docs.google.com/forms/d/e/1FAIpQLSckV33iC7vVECFa1y6HBBZ2KzpTlhSxedR4yRPbiVAB9Wy-rg/viewform?usp=sf_link';
    window.open(url, '_blank');

}