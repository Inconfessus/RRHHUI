window.onload = init;
var headers = {};
var url = "https://taller-node-rrhh.herokuapp.com"

function init() {

    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-primary').addEventListener('click', buscar);

    } else {
        window.location.href = "login.html"
    }
}



function buscar() {
    var name = document.getElementById('input-name').value;
    var last_name = document.getElementById('input-last_name').value;

    axios.post(url + "/empleados/buscar", { name: name, last_name: last_name },
        headers).then(function(res) {
        displayEmpleados(res.data.message)
    }).catch(function(err) {
        alert("No se pudieron obtener los datos del empleado")
    })
}

function displayEmpleados(empleados) {

    for (var i = 0; i < empleados.length; i++) {
        // subtitulo.innerHTML = `<h3>Datos del usuario:</h3>`;
        // datos.innerHTML = `<h3>Número de identificación: ${empleados[i].user_id}</h3><br>
        //                       <h3>Nombre: ${empleados[i].name} ${empleados[i].last_name}</h3><br>
        //                       <h3>Teléfono: ${empleados[i].phone}</h3><br>
        //                       <h3>Correo: ${empleados[i].email}</h3><br>
        //                       <h3>Dirección: ${empleados[i].address}</h3><br>`;
        document.getElementById("nombre").innerHTML = empleados[i].name + ' ' + empleados[i].last_name
        document.getElementById("idx").innerHTML = empleados[i].user_id
        document.getElementById("telefono").innerHTML = empleados[i].phone
        document.getElementById("email").innerHTML = empleados[i].email
        document.getElementById("direccion").innerHTML = empleados[i].address
    }
}