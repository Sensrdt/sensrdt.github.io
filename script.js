/* ============================================================
   Sridip Dutta — Portfolio interactions
   Theme toggle · scroll reveal · active nav · counters · UX
   ============================================================ */
(function () {
  "use strict";

  const root = document.documentElement;
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Dark / light theme toggle (persisted) ---------- *
     The full 10-style switcher is retained in styles.css (data-style);
     the UI is locked to "minimal" with a simple dark/light toggle below. */
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark" || storedTheme === "light") {
    root.setAttribute("data-theme", storedTheme);
  }
  themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById("navBurger");
  const links = document.querySelector(".nav__links");
  function closeMenu() {
    burger.classList.remove("is-open");
    links.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", function () {
    const open = burger.classList.toggle("is-open");
    links.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") closeMenu();
  });

  /* ---------- Nav: scrolled state, progress bar, back-to-top ---------- */
  const nav = document.getElementById("nav");
  const progress = document.getElementById("scrollProgress");
  const toTop = document.getElementById("toTop");

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 8);
    toTop.classList.toggle("is-visible", y > 600);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll('.nav__links a[href^="#"]');
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach((a) =>
              a.classList.toggle("is-active", a.getAttribute("href") === "#" + id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
