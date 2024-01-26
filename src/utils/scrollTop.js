export default function scrollToTop() {
 function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
 }

 function scroll() {
  const currentPosition = window.scrollY;
  const targetPosition = 0;
  const duration = 1000; // Adjust the duration as needed

  function animate(currentTime) {
   const timeElapsed = currentTime - startTime;
   const progress = timeElapsed / duration;

   window.scrollTo(0, easeInOutQuad(progress, currentPosition, targetPosition - currentPosition, 1));

   if (timeElapsed < duration) {
    window.requestAnimationFrame(animate);
   }
  }

  let startTime = null;
  window.requestAnimationFrame(function (currentTime) {
   startTime = currentTime;
   animate(currentTime);
  });
 }

 // Call scroll inside requestAnimationFrame
 window.requestAnimationFrame(scroll);
}
