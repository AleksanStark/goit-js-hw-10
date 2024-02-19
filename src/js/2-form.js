const form = document.querySelector('.feedback-form');

// Load data from local storage on page load
const storedData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
form.email.value = storedData.email || '';
form.message.value = storedData.message || '';

// Input event listener to update local storage on input
form.addEventListener('input', function (event) {
  const { name, value } = event.target;
  const formUserData = { ...storedData, [name]: value.trim() };
  localStorage.setItem('feedback-form-state', JSON.stringify(formUserData));
});

// Submit event listener
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Check if both fields are filled
  if (form.email.value.trim() !== '' && form.message.value.trim() !== '') {
    // Log data to console
    console.log({
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    });

    // Clear local storage and form fields
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});
