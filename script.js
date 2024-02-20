const toTop = document.querySelector(".to-top");
const nav = document.querySelector(".navbar-scrolL");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("active");
    nav.classList.add("active");
  } else {
    toTop.classList.remove("active");
    nav.classList.remove("active");
  }
});

var currentDate = new Date().getFullYear()

// Знаходимо елементи з відповідними ідентифікаторами та встановлюємо їм поточну дату
document.getElementById("currentYear").textContent = currentDate;
document.getElementById("currentDate1").textContent = currentDate;
document.getElementById("currentDate2").textContent = currentDate;
