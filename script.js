document.getElementById("searchBar").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let places = document.querySelectorAll(".place-card");

    places.forEach((place) => {
        let title = place.querySelector("h2").innerText.toLowerCase();
        if (title.includes(filter)) {
            place.style.display = "block";
        } else {
            place.style.display = "none";
        }
    });
});
const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
}

/* JavaScript to Toggle Dark Mode */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function searchPlaces() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let listItems = document.querySelectorAll(".placesList li");

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(input)) {
            item.style.display = "list-item"; // Corrected this line
        } else {
            item.style.display = "none";
        }
    });
}
