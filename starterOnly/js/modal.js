// DOM Elements
const formModalBg = document.getElementById('form-modal');
const validationModalBg = document.getElementById('validation-modal');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const formModalCloseBtn = document.getElementById('form-modal-close-btn');
const validationModalCloseBtn1 = document.getElementById('validation-modal-close-btn-1');
const validationModalCloseBtn2 = document.getElementById('validation-modal-close-btn-2');
const errorMessages = document.getElementsByClassName('error-message');
const formElt = document.querySelector('form[name="reserve"]');
const firstNameElt = document.getElementById('first');
const lastNameElt = document.getElementById('last');
const emailElt = document.getElementById('email');
const birthdateElt = document.getElementById('birthdate');
const quantityElt = document.getElementById('quantity');
const locationElt = document.querySelector('input[type="radio"]:nth-child(1)')
const agreementElt = document.getElementById('checkbox1');
const firstNameErrorMessageElt = document.querySelector('#first-name-data p.error-message');
const lastNameErrorMessageElt = document.querySelector('#last-name-data p.error-message');
const emailErrorMessageElt = document.querySelector('#email-data p.error-message');
const birthdateErrorMessageElt = document.querySelector('#birthdate-data p.error-message');
const quantityErrorMessageElt = document.querySelector('#quantity-data p.error-message');
const locationErrorMessageElt = document.querySelector('#location-data p.error-message');
const agreementErrorMessageElt = document.querySelector('#checkboxes-data p.error-message');


/**
 * Launch form modal when you click on a 'Je m'inscris' button
 */
function launchFormModal() {
    formModalBg.style.display = 'block';
    initializeFormModal();
    validationModalBg.style.display = 'none';
}

modalBtn.forEach((btn) => btn.addEventListener('click', launchFormModal));

/**
 * Initialize the form modal
 */
function initializeFormModal() {
    for (message of errorMessages) {
        message.style.display = 'none';
    }
    formElt.reset();
}

/**
 * Close form modal when you click on the cross in the top right corner of the form modal
 */
function closeFormModal() {
    formModalBg.style.display = 'none';
}

formModalCloseBtn.addEventListener('click', closeFormModal);

/**
 * Display validation modal when you successfully submit the form
 */
function displayValidationModal() {
    validationModalBg.style.display = 'block';
}

/**
 * Close validation modal when you click on the cross in the top right corner of the validation modal
 */
 function closeValidationModal1() {
    validationModalBg.style.display = 'none';
}

validationModalCloseBtn1.addEventListener('click', closeValidationModal1);

/**
 * Close validation modal when you click on the 'close' button of the validation modal
 */
 function closeValidationModal2() {
    validationModalBg.style.display = 'none';
}

validationModalCloseBtn2.addEventListener('click', closeValidationModal2);
