
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
