const usuario = document.getElementById("usuario");
const contraseña = document.getElementById("contraseña");
const form1 = document.querySelector(".btnInicio");

let usuarioBD = "22648294"
let contraseñaBD = "8294"
let extraerU = usuarioBD.slice(0, 1);
let extraerC = contraseñaBD.slice(0, 1);

form1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(usuario.value);
    console.log(contraseña.value);

    if (usuario.value !== usuarioBD || contraseña.value !== contraseñaBD) {
        alert("Usuario o contraseña incorrecta")
        return

    }
    alert("Para ingresar al sistema realice el captcha")
    mostrarCapchat(extraerU, extraerC);
})

const mostrarCapchat = (extraerU, extraerC) => {
    //pintar el formulario

    const capchat = document.querySelector(".login2");

    capchat.innerHTML = `
                           <form class="contenedor2" id="contenedor2">
                            <h1>validacion del capchat</h1>
                            <div id="sumas"></div>
                            <input type="number" placecholder="respuesta" id="suma"></input><br><br>
                            <button class="btn2">Guardar</button><br><br>
                           </form>
                           `
        //fin

    sumas.textContent = (`${extraerU}+${extraerC}`);

    const form2 = document.querySelector(".btn2");


    form2.addEventListener("click", function(e) {

        e.preventDefault();

        const suma = document.getElementById("suma").value;
        const resultado = Number(extraerU) + Number(extraerC)
        if (suma != resultado) {
            alert("respuesta incorrecta")
            return
        }
        alert('BIENVENIDO AL SISTEMA')
        const mostrarBotones = () => {
            const Adivinanza = document.querySelector(".login3");

            Adivinanza.innerHTML = `
                               
            <input type="submit" id="btn1Adivinanza" value="adivinanza">
            <input type="submit" id="btn2cerrarsesion" value="cerrar sesion">

              `
        }
        mostrarBotones()
            // bloque de funciones 

        const Adivinanza = document.querySelector("#btn1Adivinanza");
        const cerrarsesion = document.querySelector("#btn2cerrarsesion");

        var min = 0;
        var max = 10;

        var numAleatorio = Math.floor(Math.random() * max - min + 1) + min;
        var intentos = 0;
        var numero;

        const mostrarAdivinanza = () => {
            const Adivinanza = document.querySelector(".login3");

            Adivinanza.innerHTML = `
                                <form class="contenedor3" id="contenedor3">
                                <h1> adivina el numero del 0 al 10 </h1>
                                
                                <div class="form-Adivinanza">
              <div id="adivinazas"></div>
              <input type="number" placecholder="respuesta" id="respuesta">
              </div>
              <button class="btn3"> probar </button>
              </form>
              `
            const probar = document.querySelector(".btn3");
            console.log(probar)
            probar.addEventListener("click", function(e) {
                e.preventDefault();
                const numero = document.querySelector("#respuesta").value;


                if (numero >= min && numero <= max) {
                    if (numero < numAleatorio) {
                        intentos = intentos + 1
                        swal.fire({
                            icon: 'error',
                            title: ("estas por debajo"),
                            background: "#A32CAD",
                        })
                    } else if (numero > numAleatorio) {
                        intentos = intentos + 1
                        swal.fire({
                            icon: 'error',
                            title: ("te pasaste"),
                            background: "#A32CAD"
                        })

                    }

                } else {
                    swal.fire({
                        icon: "error",
                        title: ("estas fuera del intervalo"),
                        background: "#A32CAD ",
                    })
                }
                if (numero == numAleatorio) {
                    swal.fire({
                        title: "adivinaste el numero en " + (intentos + 1) + "intentos",
                        text: "¿desea realizar otra adivinanza?",
                        icon: 'success',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'yes!',
                        background: "#A32CAD ",

                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload()
                        } else {
                            if (confirm("¿desea cerrar sesion?")) {
                                swal.fire({
                                    icon: 'success',
                                    title: ("adios señor usuario, vuelva pronto"),
                                    background: "#A32CAD",
                                })
                                setTimeout(() => {
                                    window.location.href = "./index.html";
                                }, 2000);
                            }
                        }
                    })
                }





            })


        }


        Adivinanza.addEventListener("click", function(e) {
            e.preventDefault();
            mostrarAdivinanza()
        })


        cerrarsesion.addEventListener("click", function(e) {
            e.preventDefault();
            if (confirm("estas seguro que quieres cerrar sesion?")) {

                swal.fire({
                    icon: 'success',
                    title: ("adios señor usuario vuelva pronto"),
                    background: "#A32CAD",
                })
                setTimeout(() => {
                    window.location.href = "./index.html";
                }, 2000);
            }
        })
    })
}