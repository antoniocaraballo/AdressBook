// LET / VAR / CONST
let cName = document.querySelector("#name");
let cPhone = document.querySelector("#phone");
let cEmail = document.querySelector("#email");
let contactsList = document.querySelector("#contactsList");

// Contacts set up
var contacts = [
  {
    name: "Antonio",
    phone: "7875154229",
    email: "antoniocaraballo48@gmail.com",
  },
];

// Update Contacts
updateContacts();

function updateContacts() {
  let div = document.createElement("div");
  div.classList.add("contact");

  contacts.map((contact) => {
    contactsList.appendChild(
      div
    ).innerHTML = `<input type="checkbox" class="checkBox" />
  <p><strong>Name: </strong>${contact.name}</p>
  <p><strong>Phone: </strong>${contact.phone}</p>
  <p><strong>Email: </strong>${contact.email}</p>`;
  });
}

// New Contact Button
let newBtn = document.querySelector("#new-btn");
newBtn.addEventListener("click", newContactForm);

function newContactForm() {
  document.querySelector("#cardBg").style.opacity = "100%";
  document.querySelector("#cardBg").style.top = "0%";
}

// Close Contact Button
let closeBtn = document.querySelector("#close-new-contact");
closeBtn.addEventListener("click", closeContactForm);

function closeContactForm() {
  cName.value = "";
  cPhone.value = "";
  cEmail.value = "";
  document.querySelector("#cardBg").style.opacity = "0%";
  document.querySelector("#cardBg").style.top = "-100%";
}

// Save Contact Button
let saveBtn = document.querySelector("#save-btn");
saveBtn.addEventListener("click", saveContact);

function saveContact() {
  if (cName.value == "" || cPhone.value == "") {
    alert("Name and phone are required.");
  } else {
    var newContact = {
      name: cName.value,
      phone: cPhone.value,
      email: cEmail.value,
    };

    contacts.push(newContact);

    cName.value = "";
    cPhone.value = "";
    cEmail.value = "";

    updateContacts();
    document.querySelector("#cardBg").style.opacity = "0%";
    document.querySelector("#cardBg").style.top = "-100%";
  }
}

// Delete Contact Button
let deleteBtn = document.querySelector("#del-btn");
deleteBtn.addEventListener("click", deleteContact);

function deleteContact() {
  var checkBox = document.querySelectorAll(".checkBox");

  for (i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked == true) {
      checkBox[i].parentElement.remove();
    }
  }
}
