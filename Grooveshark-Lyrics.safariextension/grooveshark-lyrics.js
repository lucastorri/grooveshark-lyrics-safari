window.addEventListener("load", function() {

  if (window.top === window) {
    var injectedScript = document.createElement('script');
    injectedScript.setAttribute('src', 'https://raw.github.com/nettofarah/grooveshark-lyrics/client/client.js');
    injectedScript.setAttribute('type', 'text/javascript');
    document.head.appendChild(injectedScript);
  }

}, false);
