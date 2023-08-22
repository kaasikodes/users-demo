// Dropdown logic
const button = document.getElementById("dropdownButton");
const dropdown = document.getElementById("dropdownDelay");

button.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

button.addEventListener("focus", () => {
  dropdown.classList.remove("hidden");
});

dropdown.addEventListener("mouseleave", () => {
  dropdown.classList.add("hidden");
});

// Close the dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});
