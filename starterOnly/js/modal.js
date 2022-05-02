/**
 * Launch form modal when you click on a 'Je m'inscris' button
 */
function launchFormModal() {
    formModalBg.style.display = 'block';
    initializeFormModal();
    validationModalBg.style.display = 'none';
}

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

/**
 * Display validation modal when you successfully submit the form
 */
function displayValidationModal() {
    validationModalBg.style.display = 'block';
}

/**
 * Close validation modal when you click on a 'close' button
 */
function closeValidationModal() {
    validationModalBg.style.display = 'none';
}
