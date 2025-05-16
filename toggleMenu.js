document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const navLinks = document.getElementById("navLinks");
  const links = navLinks.querySelectorAll("a");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuIcon.classList.toggle("open");
  });

  links.forEach(link => {
    link.addEventListener("click", function () {
      // Close the menu after clicking a link
      navLinks.classList.remove("active");
      menuIcon.classList.remove("open");
    });
  });
});
