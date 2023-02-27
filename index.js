document.querySelector(".btnAttendance").addEventListener("click", handleClick);

function handleClick() {
  window.open("rsvp.html");
}

data.append("email", document.getElementById("Form").value);

var checkboxPlusOne = document.querySelector(".testcheck");

checkboxPlusOne.addEventListener("checked", function() {
  if (checkboxPlusOne.checked){
    alert("it works")
    document.getElementById("name+1").removeAttribute("disabled");
    document.getElementById("menu+1").removeAttribute("disabled");
  } else {
    alert("No");
    document.getElementById("name+1").setAttribute("disabled");
    document.getElementById("menu+1").setAttribute("disabled");
  }
})
