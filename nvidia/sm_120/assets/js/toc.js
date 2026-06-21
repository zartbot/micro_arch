// TOC active link highlighting via scroll position
(function () {
  const tocLinks = document.querySelectorAll('.toc-right a[href^="#"]');
  if (!tocLinks.length) return;
  const targets = [];
  tocLinks.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) targets.push({ el, link: a });
  });
  if (!targets.length) return;
  function clearActive() {
    tocLinks.forEach((a) => a.classList.remove("active"));
  }
  function onScroll() {
    const y = window.scrollY + 120;
    let current = null;
    targets.forEach((t) => {
      if (t.el.offsetTop <= y) current = t;
    });
    clearActive();
    if (current) current.link.classList.add("active");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
