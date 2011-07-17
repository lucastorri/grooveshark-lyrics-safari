window.addEventListener("load", function() {

if (/*document.URL.match(/grooveshark\.com/) && */window.top === window) {
  console.log('injecting');
  var injectedScript = document.createElement('script');
  injectedScript.setAttribute('src', 'http://localhost:8000/client.js'); // 'https://raw.github.com/nettofarah/grooveshark-lyrics/client/client.js'
  injectedScript.setAttribute('type', 'text/javascript');
  document.head.appendChild(injectedScript);
}

}, false);
