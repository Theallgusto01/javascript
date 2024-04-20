    function toca_som(idElementoAudio){

        document.querySelector(idElementoAudio).play()

    }

    const lista_de_teclas = document.querySelectorAll('.tecla');

    for(var i=0; i < lista_de_teclas.length; i++){

        const tecla = lista_de_teclas[i];
        const instrumento = tecla.classList[1];

        // Template String
        const toca_tecla = `#som_${instrumento}`;

        tecla.onclick = function () {
            toca_som(toca_tecla);
        } 
    }