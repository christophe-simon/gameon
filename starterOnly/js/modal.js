// DOM Elements
const modalBg = document.querySelector('.bground');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const closeBtn1 = document.getElementsByClassName('close')[0];



/**
 * Launch modal form
 */
function launchModal() {
    modalBg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

/**
 * Close modal form
 */
function closeModal() {
    modalBg.style.display = "none";
}

closeBtn1.addEventListener('click', closeModal);


function createSuccessModal() {

    // Let's target the main tag and add a child element: div.bground2
    let mainEltArray = document.getElementsByTagName('main');
    let mainElt = mainEltArray[0];

    const newBgroundElt = document.createElement('div');
    newBgroundElt.classList.add('bground2');

    mainElt.appendChild(newBgroundElt);

    // Let's add a child element: div.content
    const newContentElt = document.createElement('div');
    newContentElt.classList.add('content');

    newBgroundElt.appendChild(newContentElt);

    // Let's add 2 children elements: span.close and div.modal-body.modal-body-success
    const newCloseElt = document.createElement('span');
    newCloseElt.classList.add('close');

    const newModalBodyElt = document.createElement('div');
    newModalBodyElt.classList.add('modal-body');
    newModalBodyElt.classList.add('modal-body-success');

    newContentElt.appendChild(newCloseElt);
    newContentElt.appendChild(newModalBodyElt);

    // Let's add 2 children elements: p and button.btn-signup.modal-btn
    const newMessageElt = document.createElement('p');
    newMessageElt.textContent = 'Merci pour votre inscription';

    const newCloseBtn = document.createElement('button');
    newCloseBtn.textContent = 'Fermer';
    newCloseBtn.classList.add('btn-signup');
    newCloseBtn.classList.add('modal-btn');
    newCloseBtn.classList.add('modal-btn-success');

    newModalBodyElt.appendChild(newMessageElt);
    newModalBodyElt.appendChild(newCloseBtn);
}

function displaySuccessModal() {
        const modalBgArray = document.getElementsByClassName('.bground2');
        console.log(modalBgArray);
        const successModalBg = modalBgArray[0];
        console.log(successModalBg);
        successModalBg.style.display = "block";
}

/*
function closeSuccessModal() {
    //const closeBtn2 = document.getElementsByClassName('close')[1];
    const modalBgArray = document.getElementsByClassName('.bground');
    const successModalBg = modalBgArray[1];
    successModalBg.style.display = "none";
}

(document.getElementsByClassName('close')[1]).addEventListener('click', closeSuccessModal);
*/
