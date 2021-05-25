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
        document.querySelector('.btn-primary').addEventListener('click', agregar);

    } else {
        window.location.href = "login.html"
    }
}



function agregar() {
    var name = document.getElementById('input-name').value;
    var last_name = document.getElementById('input-last_name').value;
    var phone = document.getElementById('input-phone').value;
    var email = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;

    axios.post(url + "/empleados", {
        name: name,
        last_name: last_name,
        phone: phone,
        email: email,
        address: address
    }, headers).then(function(res) {
        console.log(res);
        alert("Registro exitoso")
        window.location.href = "agregar.html"
    }).catch(function(err) {
        console.log(err);
    })
}