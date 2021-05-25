window.onload = init;
var headers = {};
var url = "http://localhost:3000"

function init() {
    if (localStorage.getItem("token")) {
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-primary').addEventListener('click', eliminar);

    } else {
        window.location.href = "login.html"
    }
}



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