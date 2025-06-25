// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault()
    const target = document.querySelector(link.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// Mobile toggle
const toggle = document.getElementById('menuToggle')
const navLinks = document.querySelector('.nav-links')

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

// Responsive CSS class handled via media query
