/**
 * Checks if a data is valid
 * @param {string} elt 
 * @returns {boolean}
 */
const isDataValid = function(elt) {
    switch (elt) {
        case FIRST_NAME_ELT:
            return nameRegex.test(firstNameElt.value);
        case LAST_NAME_ELT:
            return nameRegex.test(lastNameElt.value);
        case EMAIL_ELT:
            return emailRegex.test(emailElt.value);
        case BIRTHDATE_ELT:
            return dateRegex.test(birthdateElt.value);
        case QUANTITY_ELT:
            return competitionsNumberRegex.test(quantityElt.value);
        case LOCATION_ELT:
            const chosenLocationElt = document.querySelector('input[type="radio"]:checked');
            return (chosenLocationElt !== null && locationRegex.test(chosenLocationElt.value));
        case AGREEMENT_ELT:
            return agreementElt.checked;
        default:
            throw 'Pas de donnée de ce type';
    }
}

/**
 * Display correctly (in casual mode or in error mode) an element whether its value is valid or not
 * @param {string} elt 
 */
const manageElementDisplay = function(elt) {
    const elements = {
        firstNameElt,
        lastNameElt,
        emailElt,
        birthdateElt,
        quantityElt,
        locationElt,
        agreementElt
    };

    const errorMessagesElts = {
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
const isFormValid = function() {
    return (
        isDataValid(FIRST_NAME_ELT) &&
        isDataValid(LAST_NAME_ELT) &&
        isDataValid(EMAIL_ELT) &&
        isDataValid(BIRTHDATE_ELT) &&
        isDataValid(QUANTITY_ELT) &&
        isDataValid(LOCATION_ELT) &&
        isDataValid(AGREEMENT_ELT)
    );
}

/**
 * Checks if the form is valid and display the validation modal in this case, or display the errors if there are any
 */
const manageValidation = function(evt) {
    evt.preventDefault();

    if (isFormValid()) {
        closeFormModal();
        displayValidationModal();
    } else {
        manageElementDisplay(FIRST_NAME_ELT);
        manageElementDisplay(LAST_NAME_ELT);
        manageElementDisplay(EMAIL_ELT);
        manageElementDisplay(BIRTHDATE_ELT);
        manageElementDisplay(QUANTITY_ELT);
        manageElementDisplay(LOCATION_ELT);
        manageElementDisplay(AGREEMENT_ELT);
    }
}


