// DOM Elements
const formModalBg = document.getElementById('form-modal');
const validationModalBg = document.getElementById('validation-modal');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const formModalCloseBtn = document.getElementById('form-modal-close-btn');
const validationModalCloseBtn = document.getElementsByClassName('validation-modal-close-btn');
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

// Regex variables
const NAME_REGEX = /^[a-zA-ZáéíóúýÁÉÍÓÚÝàèìòùÀÈÌÒÙäëïöüÿÄËÏÖÜŸçÇæœÆŒåÅßøØãñõÃÑÕ']{2,}$/;
const nameRegex = new RegExp(NAME_REGEX);

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailRegex = new RegExp(EMAIL_REGEX);

const DATE_REGEX = /^[0-9][0-9][0-9][0-9]\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;
const dateRegex = new RegExp(DATE_REGEX);

const COMPETITIONS_NUMBER_REGEX = /^[0-9]{1,2}$/;
const competitionsNumberRegex = new RegExp(COMPETITIONS_NUMBER_REGEX);

const LOCATION_REGEX = /^New York|San Francisco|Seattle|Chicago|Boston|Portland$/;
const locationRegex = new RegExp(LOCATION_REGEX);

// Constants
const FIRST_NAME_ELT = 'firstNameElt';
const LAST_NAME_ELT = 'lastNameElt';
const EMAIL_ELT = 'emailElt';
const BIRTHDATE_ELT = 'birthdateElt';
const QUANTITY_ELT = 'quantityElt';
const LOCATION_ELT = 'locationElt';
const AGREEMENT_ELT = 'agreementElt';