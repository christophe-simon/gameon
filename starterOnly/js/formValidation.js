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

// Error messages
const NAME_ERROR = 'Vous devez indiquer un nom contenant un minimum de 2 caractères';
const EMAIL_ERROR = 'Vous devez indiquer une adresse email valide';
const DATE_ERROR = 'Vous devez indiquer une date correcte';
const QUANTITY_ERROR = 'Vous devez indiquer un nombre compris entre 0 et 99';
const LOCATION_ERROR = 'Vous devez sélectioner une ville';
const AGREEMENT_ERROR = 'Vous devez accepter les conditions d\'utilisation';

/**
 * Checks if the first name is valid (ie. contains at least 2 characters)
 * @returns {boolean}
 */
/*let isFirstNameValid = function() {
    const firstNameElt = document.getElementById('first');
    if (nameRegex.test(firstNameElt.value)) {
        firstNameElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        firstNameElt.parentElement.setAttribute('data-error-visible', 'true');
        
        displayOrHideErrorMessage(firstNameElt, NAME_ERROR);

        return false;
    }
}*/



let isDataValid = function(elt) {
    switch (elt) {
        case 'firstNameElt':
            const firstNameElt = document.getElementById('first');
            return nameRegex.test(firstNameElt.value);
        case 'lastNameElt':
            const lastNameElt = document.getElementById('last');
            return nameRegex.test(lastNameElt.value);
        case 'emailElt':
            const emailElt = document.getElementById('email');
            return emailRegex.test(emailElt.value);
        case 'birthdateElt':
            const birthdateElt = document.getElementById('birthdate');
            return dateRegex.test(birthdateElt.value);
        case 'quantityElt':
            const quantityElt = document.getElementById('quantity');
            return competitionsNumberRegex.test(quantityElt.value);
        case 'locationElt':
            const chosenLocationElt = document.querySelector('input[type="radio"]:checked');
            return (chosenLocationElt !== null && locationRegex.test(chosenLocationElt.value));
        case 'agreementElt':
            const agreementElt = document.getElementById('checkbox1');
            return agreementElt.checked;
        default:
            console.log('Pas de donnée de ce type');
    }
}

/*let manageErrorMessageDisplay = function(elt, errorMessage) {
    if (elt !== null && isDataValid(elt)) {

    } else {
        const newErrorMessageElt = document.createElement('p');
        newErrorMessageElt.classList.add('error-message');
        newErrorMessageElt.textContent = errorMessage;
        elt.parentElement.appendChild(newErrorMessageElt);
    }

}*/

let manageElementdisplay = function(elt) {

    // 1ère variante
    
    let elements = {
        firstNameElt: document.getElementById('first'),
        lastNameElt: document.getElementById('last'),
        emailElt: document.getElementById('email'),
        birthdateElt: document.getElementById('birthdate'),
        quantityElt: document.getElementById('quantity'),
        locationElt: document.querySelector('input[type="radio"]:nth-child(1)'),
        agreementElt: document.getElementById('checkbox1')
    };

    let elementsToDelete = {
        firstNameElt: document.querySelector('#first + p.error-message'),
        lastNameElt: document.querySelector('#last + p.error-message'),
        emailElt: document.querySelector('#email + p.error-message'),
        birthdateElt:document.querySelector('#birthdate + p.error-message'),
        quantityElt: document.querySelector('#quantity + p.error-message'),
        locationElt: document.querySelector('.checkbox-label[for="location6"] + p.error-message'),
        agreementElt: document.querySelector('.checkbox2-label + p.error-message')
    };

    let errorMessages = {
        firstNameElt: NAME_ERROR,
        lastNameElt: NAME_ERROR,
        emailElt: EMAIL_ERROR,
        birthdateElt: DATE_ERROR,
        quantityElt: QUANTITY_ERROR,
        locationElt: LOCATION_ERROR,
        agreementElt: AGREEMENT_ERROR
    };

    if (elt !== null && isDataValid(elt)) {
        if (elementsToDelete[elt] !== null) {
            (elements[elt]).parentElement.removeChild(elementsToDelete[elt]);
        }
        (elements[elt]).parentElement.setAttribute('data-error-visible', 'false');
    } else {
        if (elt == 'agreementElt') {
            console.log(elt);
            console.log(elements[elt]);
            console.log(elementsToDelete[elt]);
        }

        if (elementsToDelete[elt] === null) {
            const newErrorMessageElt = document.createElement('p');
            newErrorMessageElt.classList.add('error-message');
            newErrorMessageElt.textContent = errorMessages[elt];
            (elements[elt]).parentElement.appendChild(newErrorMessageElt);
        }
        (elements[elt]).parentElement.setAttribute('data-error-visible', 'true');
    }


    //2ème version
 /*
    if (elt !== null && isDataValid(elt)) {

        let elementToDelete;

        switch (elt) {
            case 'firstNameElt':
                elementToDelete = document.querySelector('#first + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('first').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('first').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'lastNameElt':
                elementToDelete = document.querySelector('#last + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('last').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('last').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'emailElt':
                elementToDelete = document.querySelector('#email + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('email').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('email').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'birthdateElt':
                elementToDelete = document.querySelector('#birthdate + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('birthdate').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('birthdate').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'quantityElt':
                elementToDelete = document.querySelector('#quantity + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('quantity').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('quantity').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'locationElt':
                elementToDelete = document.querySelector('#location6 + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('location6').parentElement.removeChild(elementToDelete);
                }
                document.querySelector('input[type="radio"]:nth-child(1)').parentElement.setAttribute('data-error-visible', 'false');
                break;
            case 'agreementElt':
                elementToDelete = document.querySelector('#checkbox2 + p.error-message');
                if (elementToDelete !== null) {
                    document.getElementById('checkbox2').parentElement.removeChild(elementToDelete);
                }
                document.getElementById('checkbox1').parentElement.setAttribute('data-error-visible', 'false');
                break;
            default:
                console.log('elt ne correspond à aucune valeur');
        }
    } else {
        const newErrorMessageElt = document.createElement('p');
        newErrorMessageElt.classList.add('error-message');
        switch (elt) {
            case 'firstNameElt':
                document.getElementById('first').parentElement.setAttribute('data-error-visible', 'true');          
                newErrorMessageElt.textContent = NAME_ERROR;
                document.getElementById('first').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'lastNameElt':
                document.getElementById('last').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = NAME_ERROR;
                document.getElementById('last').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'emailElt':
                document.getElementById('email').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = EMAIL_ERROR;
                document.getElementById('email').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'birthdateElt':
                document.getElementById('birthdate').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = DATE_ERROR;
                document.getElementById('birthdate').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'quantityElt':
                document.getElementById('quantity').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = QUANTITY_ERROR;
                document.getElementById('quantity').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'locationElt':
                document.querySelector('input[type="radio"]:nth-child(1)').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = LOCATION_ERROR;
                document.querySelector('input[type="radio"]:nth-child(1)').parentElement.appendChild(newErrorMessageElt);
                break;
            case 'agreementElt':
                document.getElementById('checkbox1').parentElement.setAttribute('data-error-visible', 'true');
                newErrorMessageElt.textContent = AGREEMENT_ERROR;
                document.getElementById('checkbox1').parentElement.appendChild(newErrorMessageElt);
                break;
            default:
                console.log('elt ne correspond à aucune valeur');
        }
    }*/
}

/*let manageFirstNameDisplay = function() {
    if (isDataValid('firstNameElt')) {
        (document.getElementById('first')).parentElement.setAttribute('data-error-visible', 'false');
    } else {
        (document.getElementById('first')).parentElement.setAttribute('data-error-visible', 'true');
    }
}*/



/*let deleteErrorMessage = function(errorElt) {
    const errorMessageArray = document.getElementsByClassName('error-message');
    if (errorMessageArray !== null) {
        let error
    }
    errorElement.parentElement.removeChild(docum)
    elt.removeChild(newElt);
}*/

/**
 * Checks if the last name is valid (ie. contains at least 2 characters)
 * @returns {boolean}
 */
/*let isLastNameValid = function() {
    const lastNameElt = document.getElementById('last');
    if (nameRegex.test(lastNameElt.value)) {
        lastNameElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        lastNameElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if the email address is valid
 * @returns {boolean}
 */
/*let isEmailValid = function() {
    const emailElt = document.getElementById('email');
    if (emailRegex.test(emailElt.value)) {
        emailElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        emailElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if the birth date is valid
 * @returns {boolean}
 */
/*let isBirthDateValid = function() {
    const birthdateElt = document.getElementById('birthdate');
    if (dateRegex.test(birthdateElt.value)) {
        birthdateElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        birthdateElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if the number of competitions is valid (ie. between 0 and 99)
 * @returns {boolean}
 */
/*let isCompetitionsNumberValid = function() {
    const quantityElt = document.getElementById('quantity');
    if (competitionsNumberRegex.test(quantityElt.value)) {
        quantityElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        quantityElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if the location is valid (ie. if one of the towns is selected)
 * @returns {boolean}
 */
/*let isLocationValid = function() {
    const firstLocationElt = document.querySelector('input[type="radio"]:nth-child(1)');
    const chosenLocationElt = document.querySelector('input[type="radio"]:checked');
    if (chosenLocationElt !== null && locationRegex.test(chosenLocationElt.value)) {
        firstLocationElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        firstLocationElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if the agreement is valid (ie. if the agreement checkbox is checked)
 * @returns {boolean}
 */
/*let isAgreementValid = function() {
    const agreementElt = document.getElementById('checkbox1');
    if (agreementElt.checked === true) {
        agreementElt.parentElement.setAttribute('data-error-visible', 'false');
        return true;
    } else {
        agreementElt.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
}*/

/**
 * Checks if form is valid
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

const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (isFormValid()) {
        closeModal();
        createSuccessModal();
        displaySuccessModal();
    } else {
        manageElementdisplay('firstNameElt');
        manageElementdisplay('lastNameElt');
        manageElementdisplay('emailElt');
        manageElementdisplay('birthdateElt');
        manageElementdisplay('quantityElt');
        manageElementdisplay('locationElt');
        manageElementdisplay('agreementElt');
    }
});









