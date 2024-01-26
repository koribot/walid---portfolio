export default function smoothScroll(targetElement, paddingOffset = 0, ms = 200) {
 const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - paddingOffset;
 const startPosition = window.scrollY;
 const distance = targetTop - startPosition;
 const duration = ms; // You can adjust the duration as needed

 let startTime;

 function scrollAnimation(currentTime) {
  if (!startTime) startTime = currentTime;
  const timeElapsed = currentTime - startTime;
  const scrollProgress = Math.min(timeElapsed / duration, 1);
  window.scrollTo(0, startPosition + distance * scrollProgress);

  if (timeElapsed < duration) {
   window.requestAnimationFrame(scrollAnimation);
  }
 }

 window.requestAnimationFrame(scrollAnimation);
}
