window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(Services)
  activateMenuAtCurrentSection(About)
  activateMenuAtCurrentSection(Contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  // quais dados vou precisar? 0 home 831 services
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargerLine = targetLine >= sectionTop

  //verificar se a base está abaixo da linha algo
  // quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargerLine = sectionEndsAt <= targetLine

  //limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargerLine && !sectionEndPassedTargerLine

  const sectionId = section.getAttribute(id)
  const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)

  menuElement.classList.remove('activce')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 500) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
 #home,
 #home img,
 #home
 . stats,
 #services,
 #services header,
 #services . card,
 #about,
 #about header,
 #about .content`)
