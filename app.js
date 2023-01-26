const formContact = document.getElementById('formContact')

formContact.addEventListener('submit', (event) =>{
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value
    }

    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false
    }

    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
        const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        const nameRegex = /^[a-zA-Z ]+$/
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
       
        if (!formData.firstName || !nameRegex.test(formData.firstName)) {
            errors.firstName = true;
            firstNameError.style.display = 'block';
        }
        if (!formData.lastName || !nameRegex.test(formData.lastName)) {
            errors.lastName = true;
            lastNameError.style.display = 'block';
        }
        if (!formData.email || !emailRegex.test(formData.email)) {
            errors.email = true;
            emailError.style.display = 'block';
        }
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            errors.phone = true;
            phoneError.style.display = 'block';
        }
        if (!formData.message || formData.message.length < 4) {
            errors.message = true;
            messageError.style.display = 'block';
        }
    }
    if (!Object.values(errors).includes(true)) {
        console.log(formData)
    }

    const axios = require('axios').default;
    
    axios({
            method: 'post',
            url: 'http://212.83.176.255:3030/contact',
            data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message
            }
      });

});