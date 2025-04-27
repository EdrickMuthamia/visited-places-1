// Array to store visited places
let visitedPlaces = [];

// Array to store contacts
let contacts = [];

// Reference to HTML elements
const form = document.getElementById("placeForm");
const placeList = document.getElementById("placeList");
const contactForm = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");

// Add Place Function
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const placeName = document.getElementById("location").value.trim();
    const visitDate = document.getElementById("visitDate")?.value.trim(); // Ensure visitDate exists

    if (placeName && visitDate) {
        const place = {
            name: placeName,
            date: visitDate,
        };
        visitedPlaces.push(place);
        document.getElementById("location").value = ""; // Clear input field
        document.getElementById("visitDate").value = ""; // Clear input field

        displayPlaces();
    }
});

// Display Places Function
function displayPlaces() {
    placeList.innerHTML = ""; // Clear current list
    visitedPlaces.forEach((place, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${place.name} (visited on ${place.date})
        <button onclick="removePlace(${index})">Remove</button>`;
        placeList.appendChild(listItem);
    });
}

// Remove Place Function
function removePlace(index) {
    visitedPlaces.splice(index, 1); // Remove place from array
    displayPlaces(); // Refresh the list
    alert("Place removed successfully!");
}

// Add Contact Function
contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const email = document.getElementById("email").value.trim();

    if (firstName && lastName && phoneNumber && email) {
        const contact = {
            firstName,
            lastName,
            phoneNumber,
            email,
        };
        contacts.push(contact);

        // Clear input fields
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("email").value = "";

        displayContacts();
    }
});

// Display Contacts Function
function displayContacts() {
    contactList.innerHTML = ""; // Clear current list
    contacts.forEach((contact, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `${contact.firstName} ${contact.lastName} - ${contact.phoneNumber} (${contact.email})
        <button onclick="removeContact(${index})">Remove</button>`;
        contactList.appendChild(listItem);
    });
}

// Remove Contact Function
function removeContact(index) {
    contacts.splice(index, 1); // Remove contact from array
    displayContacts(); // Refresh the list
    alert("Contact removed successfully!");
}