window.onload = init;
var url = "https://taller-node-rrhh.herokuapp.com"

//función para darle acción al botón para inicar sesión
function init() {
    if (!localStorage.getItem("token")) {
        document.querySelector('.btn-primary').addEventListener('click', login);
    } else {
        window.location.href = "index.html"
    }
}


//función para iniciar sesión
function login() {
    var email = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: url + "/user/login",
        data: {
            email: email,
            pass: pass
        }
    }).then(function(res) {
        if (res.data.code === 200) {
            localStorage.setItem("token", res.data.message)
            window.location.href = "index.html"
        } else {
            alert("Usuario y/o contraseña incorrectos")
        }
    }).catch(function(err) {
        console.log(err);
    })
}