// Toggle Menu Function
function toggleMenu(menuId) {
  const menuContent = document.getElementById(menuId)
  if (!menuContent) {
    console.warn("toggleMenu: menu not found:", menuId)
    return
  }

  // Locate the toggle icon inside this card's header (if present)
  const header = menuContent.parentElement
    ? menuContent.parentElement.querySelector(".menu-header")
    : null
  const toggleIcon = header ? header.querySelector(".toggle-icon") : null

  // Toggle only this menu (allow multiple menus to remain open)
  if (menuContent.classList.contains("active")) {
    // If already open, close it
    menuContent.classList.remove("active")
    if (toggleIcon) toggleIcon.textContent = "+"
    return
  }

  // Close other menus to create accordion behavior
  const allMenus = document.querySelectorAll(".menu-content")
  const allIcons = document.querySelectorAll(".toggle-icon")
  allMenus.forEach((m) => m.classList.remove("active"))
  allIcons.forEach((ic) => (ic.textContent = "+"))

  // Open the requested menu
  menuContent.classList.add("active")
  if (toggleIcon) toggleIcon.textContent = "-"
}
   
// Toggle FAQ Function
function toggleFAQ(faqNumber) {
  const faqAnswer = document.getElementById("faq" + faqNumber)
  const faqToggle =
    faqAnswer && faqAnswer.previousElementSibling
      ? faqAnswer.previousElementSibling.querySelector(".faq-toggle")
      : null

  if (!faqAnswer || !faqToggle) {
    console.warn("FAQ element or toggle not found for FAQ number:", faqNumber)
    return
  }

  if (faqAnswer.classList.contains("active")) {
    // Close this FAQ
    faqAnswer.classList.remove("active")
    if (faqToggle) faqToggle.textContent = "+"
  } else {
    // Close all other FAQs
    const allAnswers = document.querySelectorAll(".faq-answer")
    const allToggles = document.querySelectorAll(".faq-toggle")

    allAnswers.forEach((answer) => answer.classList.remove("active"))
    allToggles.forEach((toggle) => (toggle.textContent = "+"))

    // Open clicked FAQ
    faqAnswer.classList.add("active")
    if (faqToggle) {
      faqToggle.textContent = "-"
    }
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add click effects to login buttons
document.querySelectorAll(".login-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const buttonType = this.textContent.trim()
    alert(`${buttonType} portal will open soon!`)
  })
})

document.querySelectorAll(".facility-item").forEach((item) => {
  item.addEventListener("click", function () {
    const pElement = this.querySelector("p")
    const facilityName = pElement ? pElement.textContent : "Facility"
    alert(`${facilityName} information will be displayed here.`)
  })
})
