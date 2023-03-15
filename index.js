document.querySelector(".btnAttendance").addEventListener("click", handleClick);

function handleClick() {
  window.open("rsvp.html");
}

const scriptURL = ''
			const form = document.forms['contactform']
		  
			form.addEventListener('submit', e => {
			  e.preventDefault()
			  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
			.then(response => alert("Thank you! your form is submitted successfully." ))
			.then(() => {  window.location.reload(); })
			.catch(error => console.error('Error!', error.message))
			});

data.append("email", document.getElementById("Form").value);


