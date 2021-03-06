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
        document.querySelector('.btn-danger').addEventListener('click', eliminar);

    } else {
        window.location.href = "login.html"
    }
}


//Función para eliminar empelados del sistema
function eliminar() {
    var user_id = document.getElementById("input-id").value

    axios.delete(url + "/empleados/" + user_id,
        headers).then(function(res) {
        console.log(res);
        alert("El empleado se elimino de la base de datos")
        window.location.href = "eliminar.html"
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrio un error al eliminar al empleado")
    })
}