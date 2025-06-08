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
});
