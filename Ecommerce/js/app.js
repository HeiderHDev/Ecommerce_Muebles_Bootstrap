const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(event){
    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute('data-bs-imagen')

    //Construir la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `img/${rutaImagen}.jpg`;
    imagen.classList.add('img-fluid');
    imagen.alt = 'Imagen Galeria';

    const contenidomodal = document.querySelector('.modal-body');
    contenidomodal.appendChild(imagen);

})

modalImagen.addEventListener('hidden.bs.modal', function(){
    const contenidomodal = document.querySelector('.modal-body');
    contenidomodal.textContent = '';
})
