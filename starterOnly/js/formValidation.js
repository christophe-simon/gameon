// Regex variables
const NAME_REGEX = /^[a-zA-Z]{2,}$/;
const nameRegex = new RegExp(NAME_REGEX);

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailRegex = new RegExp(EMAIL_REGEX);

const DATE_REGEX = /^[0-9][0-9][0-9][0-9]\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[01])$/;
const dateRegex = new RegExp(DATE_REGEX);

const COMPETITIONS_NUMBER_REGEX = /^[0-9]{1,2}$/;
const competitionsNumberRegex = new RegExp(COMPETITIONS_NUMBER_REGEX);

const LOCATION_REGEX = /^New York|San Francisco|Seattle|Chicago|Boston|Portland$/;
const locationRegex = new RegExp(LOCATION_REGEX);

/**
 * Checks if a data is valid
 * @param {string} elt 
 * @returns {boolean}
 */
let isDataValid = function(elt) {
    switch (elt) {
        case 'firstNameElt':
            return nameRegex.test(firstNameElt.value);
        case 'lastNameElt':
            return nameRegex.test(lastNameElt.value);
        case 'emailElt':
            return emailRegex.test(emailElt.value);
        case 'birthdateElt':
            return dateRegex.test(birthdateElt.value);
        case 'quantityElt':
            return competitionsNumberRegex.test(quantityElt.value);
        case 'locationElt':
            const chosenLocationElt = document.querySelector('input[type="radio"]:checked');
            return (chosenLocationElt !== null && locationRegex.test(chosenLocationElt.value));
        case 'agreementElt':
            return agreementElt.checked;
        default:
            throw 'Pas de donnée de ce type';
    }
}

/**
 * Display correctly (in casual mode or in error mode) an element whether its value is valid or not
 * @param {string} elt 
 */
let manageElementDisplay = function(elt) {
    let elements = {
        firstNameElt,
        lastNameElt,
        emailElt,
        birthdateElt,
        quantityElt,
        locationElt,
        agreementElt
    };

    let errorMessagesElts = {
        firstNameElt: firstNameErrorMessageElt,
        lastNameElt: lastNameErrorMessageElt,
        emailElt: emailErrorMessageElt,
        birthdateElt: birthdateErrorMessageElt,
        quantityElt: quantityErrorMessageElt,
        locationElt: locationErrorMessageElt,
        agreementElt: agreementErrorMessageElt
    };

    if (elt !== null && isDataValid(elt)) {
        elements[elt].parentElement.setAttribute('data-error-visible', 'false');
        errorMessagesElts[elt].style.display = 'none';
    } else {
        (elements[elt]).parentElement.setAttribute('data-error-visible', 'true');
        errorMessagesElts[elt].style.display = 'block';
    }
}

/**
 * Checks if the form is valid
 * @returns {boolean}
 */
let isFormValid = function() {
    return (
        isDataValid('firstNameElt') &&
        isDataValid('lastNameElt') &&
        isDataValid('emailElt') &&
        isDataValid('birthdateElt') &&
        isDataValid('quantityElt') &&
        isDataValid('locationElt') &&
        isDataValid('agreementElt')
    );
}

/**
 * Checks if the form is valid and display the validation modal in this case, or display the errors if there are any
 */
formElt.addEventListener('submit', function(e) {
    e.preventDefault();

    if (isFormValid()) {
        closeFormModal();
        displayValidationModal();
    } else {
        manageElementDisplay('firstNameElt');
        manageElementDisplay('lastNameElt');
        manageElementDisplay('emailElt');
        manageElementDisplay('birthdateElt');
        manageElementDisplay('quantityElt');
        manageElementDisplay('locationElt');
        manageElementDisplay('agreementElt');
    }
});