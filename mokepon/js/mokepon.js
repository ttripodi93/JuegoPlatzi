function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")  //document representa al documento html
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador) //esto es un método "addEventListener"
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML='Hipodoge'
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML='Ratigueya'
    } else {
        alert("Selecciona una mascota")
    }

}

window.addEventListener('load',iniciarJuego)//esto lo que hace es ejecutar una vez que este la estructura