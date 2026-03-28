/* Spotlight dimmer for guided demo */
(function () {
  var page = document.querySelector(".guided-demo-page");
  if (!page) return;

  var obs = new MutationObserver(function () {
    var hasTarget = !!document.querySelector(".tour-target-active");
    page.classList.toggle("has-active-target", hasTarget);
  });

  obs.observe(document.body, {
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
})();
