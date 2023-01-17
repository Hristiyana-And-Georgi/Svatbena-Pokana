document.querySelector(".btnAttendance").addEventListener("click", handleClick);

function handleClick() {
  window.open("rsvp.html");
}

data.append("email", document.getElementById("Form").value);


// Test for Thank you rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65


      const scriptURL = "https://hristiyana-and-georgi.github.io/Svatbena-Pokana/rsvp.html"
      const form = document.forms["formName"]

      form.addEventListener("submit", e => {
        e.preventDefault()
        fetch(scriptURL, { method: "POST", body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error("Error!"", error.message))
      })
