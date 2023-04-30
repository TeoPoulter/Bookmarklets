javascript:(function(){
  var text = document.body.innerText;
  var words = text.split(/\s+/);
  alert('This page has ' + words.length + ' words.');
})();
