for (btn of modalBtn) {
    btn.addEventListener('click', launchFormModal);
}
formModalCloseBtn.addEventListener('click', closeFormModal);
formElt.addEventListener('submit', manageValidation);
for (btn of validationModalCloseBtn) {
    btn.addEventListener('click', closeValidationModal);
}