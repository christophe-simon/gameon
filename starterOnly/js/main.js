modalBtn.forEach((btn) => btn.addEventListener('click', launchFormModal));
/*for (btn of modalBtn) {
    btn.addEventListener('click', launchFormModal);
}*/
formModalCloseBtn.addEventListener('click', closeFormModal);
formElt.addEventListener('submit', manageValidation(formElt));
for (btn of validationModalCloseBtn) {
    btn.addEventListener('click', closeValidationModal());
}