/* //video modal
document.addEventListener('DOMContentLoaded', function() {
  // Obtén todos los botones de lanzamiento de video
  var videoLaunchButtons = document.querySelectorAll('.video-launch');

  // Itera sobre cada botón y agrega un listener
  videoLaunchButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();

      // Obtén el modal asociado usando el atributo data-modal
      var modalId = button.getAttribute('data-modal');
      var modal = document.getElementById(modalId);

      // Verifica si el modal existe
      if (modal) {
        // Deshabilita otros eventos
        document.body.style.pointerEvents = 'none';

        // Muestra el modal
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Agrega listeners para cerrar el modal
        modal.addEventListener('click', closeModal);
        modal.querySelector('.modal-close').addEventListener('click', closeModal);

        document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
            closeModal();
          }
        });
      }
    });
  });

  function closeModal() {
    document.body.style.pointerEvents = 'auto';
    document.body.classList.remove('modal-open');

    // Oculta todos los modales
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      modal.style.display = 'none';
      modal.removeEventListener('click', closeModal);
      modal.querySelector('.modal-close').removeEventListener('click', closeModal);
    });

    document.removeEventListener('keydown', closeModal);
  }
});
 */