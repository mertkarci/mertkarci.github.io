// Language switch for the Shapeist pages: html[data-lang] hides the other language (site.css).
(function () {
  var KEY = "shapeist.lang";
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function remember(lang) { try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode */ } }
  var nav = (navigator.language || "en").toLowerCase();
  var lang = stored() || (nav.indexOf("tr") === 0 ? "tr" : "en");
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang;
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-set]");
    if (!b) return;
    lang = b.getAttribute("data-set");
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.lang = lang;
    remember(lang);
  });
})();
