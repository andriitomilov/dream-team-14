(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-switchOn]'),
    closeModalBtn: document.querySelector('[data-modal-switchOff]'),
    modal: document.querySelector('[data-modal-static]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
