const navLinks = document.querySelectorAll('.nav-link');

  // Scroll activation using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => observer.observe(section));

  // Click activation
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
// typing
const roles = ["Software Engineer ", "Web Developer ", "Programmer "];
const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentRole.substring(0, charIndex++);
  }
  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 1500; 
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
const certificates = [
  'assets/CCNA certificate_page-0001 (1).jpg',
  'assets/Internship Certificate (DEP) (1)_page-0001.jpg',
  'assets/Internship Certificate (Prodigy InfoTech) (1)_page-0001.jpg',
  'assets/DEP_Certificate_Webinar (1)_page-0001.jpg',
  'assets/AI for everyone (1)_page-0001.jpg'
];

let currentIndex = 1; // Center card

function renderSlider() {
  const container = document.getElementById("certificateSlider");
  container.innerHTML = "";

  const prevIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  const nextIndex = (currentIndex + 1) % certificates.length;

  const indices = [prevIndex, currentIndex, nextIndex];

  indices.forEach((index, i) => {
    const card = document.createElement("div");
    card.className = "cert-card" + (i === 1 ? " active" : "");
    card.innerHTML = `<img src="${certificates[index]}" alt="Certificate" class="img-fluid rounded">`;
    container.appendChild(card);
  });
}

function slideLeft() {
  currentIndex = (currentIndex - 1 + certificates.length) % certificates.length;
  renderSlider();
}

function slideRight() {
  currentIndex = (currentIndex + 1) % certificates.length;
  renderSlider();
}

renderSlider();
const toggleBtn = document.getElementById("mode");

  toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Optional: toggle button appearance
    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.classList.remove("bg-light", "text-dark");
      toggleBtn.classList.add("bg-dark", "text-white");
    } else {
      toggleBtn.classList.add("bg-light", "text-dark");
      toggleBtn.classList.remove("bg-dark", "text-white");
    }
  });