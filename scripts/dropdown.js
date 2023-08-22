// Dropdown logic
const button = document.getElementById("dropdownButton");
const dropdown = document.getElementById("dropdownDelay");

button.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

button.addEventListener("mouseover", () => {
  dropdown.classList.remove("hidden");
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.classList.add("hidden");
});
