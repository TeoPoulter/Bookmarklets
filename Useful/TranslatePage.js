javascript:(function() {
  var url = "https://translate.google.com/translate?hl=en&sl=auto&tl=en&u=" + encodeURIComponent(window.location.href);
  window.open(url, '_blank');
})();
