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
        document.querySelector('.btn-primary').addEventListener('click', actualizar);

    } else {
        window.location.href = "login.html"
    }
}



function actualizar() {
    var user_id = document.getElementById("input-id").value
    var name = document.getElementById('input-name').value;
    var last_name = document.getElementById('input-last_name').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    axios.put(url + "/empleados/" + user_id, {
        name: name,
        last_name: last_name,
        phone: phone,
        email: email,
        address: address
    }, headers).then(function(res) {
        console.log(res);
        alert("Se actualizaron los datos de forma exitosa")
        window.location.href = "actualizar.html"
    }).catch(function(err) {
        console.log(err);
        alert("Ocurrio un error al actualizar los datos")
    })
}