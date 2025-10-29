//dev tools ban
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'J') || 
        (event.ctrlKey && event.key === 'U')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

// Letiltja a Ctrl+Shift+C (Elem vizsgálata) billentyűkombinációt
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'C') {
      event.preventDefault();
  }
});

// Letiltja a Ctrl+Shift+K (Konzol megnyitása) billentyűkombinációt
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'K') {
      event.preventDefault();
  }
});
