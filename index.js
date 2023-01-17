document.querySelector(".btnAttendance").addEventListener("click", handleClick);

function handleClick() {
  window.open("rsvp.html");
}

data.append("email", document.getElementById("Form").value);


// Test for Thank you rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65


      const scriptURL = 'file:///C:/Users/hrist/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B5%D0%BD%20%D0%BF%D0%BB%D0%BE%D1%82/Web%20Dev%20Course/Wedding-Invitation-Website'
      const form = document.forms['formName']

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
      })
