
(function(){
  'use strict';

  var items = document.querySelectorAll(".home");

  function isElementInViewport(el){
      var rect = el.getBoundingClientRect();
      return(
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

var firebaseConfig = {
  apiKey: "AIzaSyBdGyFFu2dW22HUyNr1khfvgwFEDMBTUd4",
  authDomain: "virendra-sehwag.firebaseapp.com",
  databaseURL: "https://virendra-sehwag-default-rtdb.firebaseio.com",
  projectId: "virendra-sehwag",
  storageBucket: "virendra-sehwag.appspot.com",
  messagingSenderId: "94876524791",
  appId: "1:94876524791:web:438f2ff643c9760a5c33f2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

