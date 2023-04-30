javascript:(function() {
  var links = document.getElementsByTagName('a');
  var linksArray = Array.prototype.slice.call(links);
  var linkList = '';
  for (var i = 0; i < linksArray.length; i++) {
    linkList += linksArray[i].href + '\n';
  }
  var newTab = window.open();
  newTab.document.body.innerText = linkList;
})();
