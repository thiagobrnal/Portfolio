
function animacionTexto(){
    const $animacion = document.getElementById("titulo")
    $animacion.classList.replace("text-animacion","reverse")
    
}

// Función para cambiar el texto
function cambiarTexto() {
    const $animacion = document.getElementById("titulo")

    if ($animacion.innerText === 'Bernal Thiago') {
        $animacion.innerText = 'Backend Dev'
        $animacion.classList.replace("reverse","text-animacion")
    } else {
        $animacion.innerText = 'Bernal Thiago'
        $animacion.classList.replace("reverse","text-animacion")
    }
}

// Cambia el texto cada 7000 milisegundos (7 segundos)
setInterval(animacionTexto, 9100);
setInterval(cambiarTexto, 10000);


function ocultarDiv(nombreDiv, nombreEnNav){
    let inicio = document.getElementById("inicio")
    let aboutMe = document.getElementById("about-me")
    let habildades = document.getElementById("habilidades")
    let inicioId = document.getElementById("in")
    let aboutMeId = document.getElementById("about")
    let habilidadesId = document.getElementById("habi")
    

    if(inicio.style.display !== 'none'){
        inicio.style.display = 'none'
        inicioId.classList.remove('select')
    }

    if(aboutMe.style.display !== 'none'){
        aboutMe.style.display = 'none'
        aboutMeId.classList.remove('select')
    }

    if(habildades.style.display !== 'none'){
        habildades.style.display = 'none'
        habilidadesId.classList.remove('select')
    }

    let div = document.getElementById(nombreDiv)
    let nav = document.getElementById(nombreEnNav)
    if(div){
        div.style.display = 'flex'
        nav.classList.add('select')
    }
}

