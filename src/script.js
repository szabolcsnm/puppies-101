
const openButton = document.querySelector('a');
openButton.addEventListener('click', openModal);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeModal);

const modal = document.querySelector('.modal');

function openModal(event) {
  event.preventDefault();
  modal.style.display = 'flex';
  document.body.classList.add('body-modal-open');
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('body-modal-open');
}
