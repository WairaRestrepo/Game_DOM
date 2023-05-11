let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
  //Se llaman los elemtos del Html con su respectivo Id y se almacenan en una variable
    let inputSalchi = document.getElementById('Salchi');
    let inputNube = document.getElementById('Nube');
    let inputPinche = document.getElementById('Pinche');
    let inputCriollo = document.getElementById('Criollo');
    let inputPastor = document.getElementById('Pastor');
    let inputAkita = document.getElementById('Akita');
    let spanMascotaJugador = document.getElementById('mascota-jugador');

    //se pone  checked para validar si fue ese el input seleccionado
    if(inputSalchi.checked){
        spanmascotaJugador.innerHTML = 'Salchi';/* se  remplaza el valor que tenga la variable spanmascotaJugador con ese id (mascota-jugador) y se le asigan el nuevo valor despues del igual. */
    }else if(inputNube.checked){ 
        spanmascotaJugador.innerHTML ='Nube';
    }else if(inputPinche.checked){
        spanmascotaJugador.innerHTML ='Pinche';
    }else if(inputCriollo.checked){
        spanmascotaJugador.innerHTML ='Criollo';
    }else if(inputPastor.checked){
        spanmascotaJugador.innerHTML ='Pastor';
    }else if(inputAkita.checked){
        spanmascotaJugador.innerHTML ='Akita';
    }else {
        alert("Selecciona una mascota por favor")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanmascotaEnemiga.innerHTML='Salchi';
    } else if (mascotaAleatorio == 2){
        spanmascotaEnemiga.innerHTML='Nube';
    }else if (mascotaAleatorio == 3){
        spanmascotaEnemiga.innerHTML='Pinche';
    }else if (mascotaAleatorio == 4){
        spanmascotaEnemiga.innerHTML='Criollo';
    }else if (mascotaAleatorio == 5){
        spanmascotaEnemiga.innerHTML='Pastor';
    }else{
        spanmascotaEnemiga.innerHTML='Akita';
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA 💦 '
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO 🔥'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA 💦 '
    } else {
        ataqueEnemigo = 'TIERRA  🌱'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("\n"+ " 🔔 Estan empatados ⏰")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("\n"+ " 📢 Gana el judador 😎 contra el Pc 💻")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("\n"+ " 📢 Gana el judador 😎 contra el Pc 💻")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("\n"+ " 📢 Gana el judador 😎 contra el Pc 💻")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje( "\n"+" 📢 Gana el Pc 💻 💫 contra el  judador 😱 ")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal('¡✨ Felicitaciones Ganaste 🏆🎉! 🎈')
    } else if (vidasJugador == 0) {
        crearMensajeFinal('¡Oh 😲 no ,has perdido contra la Maquina 😖!!')
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
