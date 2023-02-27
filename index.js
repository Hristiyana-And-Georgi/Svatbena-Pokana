document.querySelector(".btnAttendance").addEventListener("click", handleClick);

function handleClick() {
  window.open("rsvp.html");
}

data.append("email", document.getElementById("Form").value);

const toggle = document.getElementById("checkboxPlusOne");
const spanPlusOne = document.getElementById("plusOne");

toggle.addEventListener("change", function() {
  if (toggle.checked) {
    spanPlusOne.style.display = "block";
  } else {
    spanPlusOne.style.display = "none";
  }
});
