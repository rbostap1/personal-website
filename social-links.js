document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = [
    {
      selector: 'a[aria-label="LinkedIn"]',
      url: "https://www.linkedin.com/in/ryanbostaph"
    },
    {
      selector: 'a[aria-label="X"]',
      url: "https://x.com/RyanBostaph"
    },
    {
      selector: 'a[aria-label="Instagram"]',
      url: "https://www.instagram.com/ryan_bostaph"
    }
  ];

  socialLinks.forEach(link => {
    const el = document.querySelector(link.selector);
    if (el) {
      el.href = link.url;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });

  // Project links mapping (order matches the cards)
  const projectLinks = [
    "https://github.com/rbostap1/personal-website",
    "https://github.com/rbostap1/02-prj-intel-sustainability",
    "https://github.com/rbostap1/03-intel-proj-localization",
    "https://github.com/rbostap1/water-rush"
  ];

  // Select all project "View Project" buttons in order
  const projectButtons = document.querySelectorAll(
    '.projects-section .card .btn, .projects-section .card .btn-outline-primary'
  );

  projectButtons.forEach((btn, idx) => {
    if (projectLinks[idx]) {
      btn.href = projectLinks[idx];
      btn.classList.remove('disabled');
      btn.removeAttribute('tabindex');
      btn.removeAttribute('aria-disabled');
      btn.target = "_blank";
      btn.rel = "noopener";
    }
  });
});
