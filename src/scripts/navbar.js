const navbarHTML = `
    <input type="checkbox" id="check" />
    <nav class="navbar">
      <div class="container"> 
        <a href="home.html">
          <img
            id="logo"
            src="../../resources/images/ctu-buddy-logo.png"
            alt="CTU Buddy"
          />
        </a>
        <label for="check" class="bar">
          <span class="fa fa-bars" id="bars"></span>
          <span class="fa fa-times" id="times"></span>
        </label>
      </div>
      <menu>
        <li><a href="home.html">Home</a></li>
        <li><a href="timetable.html">Timetable</a></li>
        <li><a href="discussion.html">Discussion</a></li>
        <li><a href="share-resources.html">Share Resources</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="contact-us.html">Contact Us</a></li>
      </menu>
    </nav>
`;

// This direct write is apparently not recommended, so I'll need to find a better way to write the navbar
document.write(navbarHTML);

const currentPage = window.location.pathname.split("/").pop();
const menuItems = document.querySelectorAll(".navbar menu li a");
menuItems.forEach((item) => {
  if (item.getAttribute("href") === currentPage) {
    item.parentNode.classList.add("active");
    return;
  }
});
