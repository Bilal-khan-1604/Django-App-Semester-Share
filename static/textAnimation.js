// this is an animation for the heading text to look like it is being typed at the moment the page loads
document.addEventListener('DOMContentLoaded', function () {
    // here I am triggering the animation
    const heading = document.querySelector('.heading');
    heading.classList.add('animate');

    // after the animation the cursor shown in the animation is removed
    const animationDuration = parseFloat(getComputedStyle(heading).animationDuration) * 1000;
    setTimeout(() => {
      heading.style.borderRight = 'none';
    }, animationDuration);
  });