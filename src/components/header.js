document.addEventListener("DOMContentLoaded", () => {
  console.log("Header.js loaded");

  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");
  const close = document.getElementById("closeMenu");

  const lines = toggle?.querySelectorAll(".line");
  const logoWhite = document.getElementById("logoWhite");
  const logoBlack = document.getElementById("logoBlack");

  console.log({ toggle, menu, close, lines, logoWhite, logoBlack });

  const isHome = window.location.pathname === "/";
  console.log("Is home?", isHome);

  toggle?.addEventListener("click", () => {
    menu?.classList.remove("hidden");
    toggle.classList.add("hidden");
    console.log("Menu opened");
  });

  close?.addEventListener("click", () => {
    menu?.classList.add("hidden");
    toggle.classList.remove("hidden");
    console.log("Menu closed");

    if (isHome) {
      const threshold = window.innerHeight * 0.9;
      const scrolled = window.scrollY > threshold;
      console.log("Scrolled?", scrolled);

      lines?.forEach((line) => {
        line.classList.toggle("bg-white", !scrolled);
        line.classList.toggle("bg-primary-900", scrolled);
      });
    }
  });

  if (isHome) {
    window.addEventListener("scroll", () => {
      const threshold = window.innerHeight * 0.9;
      const scrolled = window.scrollY > threshold;
      console.log("Scroll event - scrolled:", scrolled);

      lines?.forEach((line) => {
        line.classList.toggle("bg-white", !scrolled);
        line.classList.toggle("bg-primary-900", scrolled);
      });

      if (logoWhite && logoBlack) {
        logoWhite.classList.toggle("opacity-0", scrolled);
        logoBlack.classList.toggle("opacity-0", !scrolled);
      }
    });

    // Initial state
    const threshold = window.innerHeight * 0.9;
    const scrolled = window.scrollY > threshold;
    lines?.forEach((line) => {
      line.classList.toggle("bg-white", !scrolled);
      line.classList.toggle("bg-primary-900", scrolled);
    });
    if (logoWhite && logoBlack) {
      logoWhite.classList.toggle("opacity-0", scrolled);
      logoBlack.classList.toggle("opacity-0", !scrolled);
    }
  } else {
    // Ikke hjem-side: alltid mørk
    lines?.forEach((line) => {
      line.classList.remove("bg-white");
      line.classList.add("bg-primary-900");
    });
    if (logoWhite) logoWhite.classList.add("opacity-0");
    if (logoBlack) logoBlack.classList.remove("opacity-0");
  }
});
