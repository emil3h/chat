function clickMeEvent(obj) {
    if (obj.innerHTML == "Don't Click Me") {
      obj.innerHTML = "Don't Click Me<br> I warned you";
      return;
    }
    if (obj.innerHTML == "Don't Click Me<br> I warned you") {
      obj.innerHTML = "youre still here?";  
      return; 
    }
    if (obj.innerHTML == "youre still here?") {
    obj.innerHTML = "Goodbye";  
      return; 
    }
    if (obj.innerHTML == "Goodbye") {
      obj.style.display = "none";
      return;
    }

  }

  
  function myFunction() {
    document.write('<iframe width="100%" height="100%" frameborder="0" src="https://matias.ma/nsfw/"></iframe>');
}