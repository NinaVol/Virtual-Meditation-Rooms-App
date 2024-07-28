VANTA.BIRDS({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

  gsap.to('h1', {
    text: 'Welcome to the place of power...',
    duration: 3,
    repeatDelay: 0.7,
    ease: 'power1.in',
    delay: 0.5
})

gsap.to('p', {
    text: 'Choose your meditation room...',
    duration: 3,
    repeatDelay: 0.7,
    ease: 'power1.in',
    delay: 2.5
})

gsap.from('#meditation-container', {duration: 3,  stagger: .6, opacity: 0, delay: 3})