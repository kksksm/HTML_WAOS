function Login(){
var boton = document.getElementById("entrar");
var done = 0;
var usuario = document.login.usuario.value;
var password = document.login.password.value;


const secreto0 = [ "a", "d", "u", "h", "r", "u", "P",
                   "J", "H", "F", "K", "9", "1", "?",
                   "+", "#", "7", "T", "0", "&", "d",
                   "=", "o", "*", "q", "%", "a", "H",];
const secreto1 = [ "k", "h", "w", "i", "Y", "Q", "T",
                   "@", "z", " ", ".", "L", "R", "-",
                   "(", ")", ";", ":", "3", "/", "$",];
const secreto2 = [ "H", "I", "j", "s", "U", "B", "L",
                   "_", "1", "5", "6", "X", "¿", "!",];
const secreto3 = [ "m", "i", "P", "p", "z", "G", "R"];
const secreto4 = [ "9", "A", "C", "X", "m", "J", "a"];
const secreto5 = [ "7", "k", "o", "2", "l", "L", "p"];
const secreto6 = [ "e", "t", "v", "S", "4", "z", "Q"];

boton.addEventListener('click', () =>{ if (usuario == secreto5[1]+secreto4[6]+secreto1[3] && password == secreto3[0]+secreto6[0]+secreto0[0]+secreto6[1]+secreto3[3]+secreto1[3]+secreto6[0]){window.location="HTML_welcome_to_chaos.html"} else {window.location="index.html"}
});
}

//Login()
//base de datos a continuacion

function Login2(){
const mysql = require('mysql');
var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_prueba', // Se debe configurar la base de datos creada
});

conexion.connect(function (err) {
  if(err) {
    throw err;
  } else {
    console.log("Conexión exitosa....");
  }
});

let sasa = "SELECT * FROM dorohedoro_data;";
conexion.query(sasa, function(error, lista) {
  if (error){
    throw error;
  }else{
    console.log(lista);
    }
})


let btn = document.getElementById("entrar");
//let Nikaido = "Nikaid";
//let TimeMachine = "TimeMachine";
let contraseña = "SELECT * FROM dorohedoro_data";
conexion.query(contraseña,function(error, rows){
  if (error) {
    throw error;
  }else{
    let UsuarioUno=rows[0];
    let SuperUsuario = UsuarioUno.usuarios;
    let SuperClave = UsuarioUno.contraseña;
    btn.addEventListener('click', ()=> {
    let comprobar = document.getElementById("usuario").value;
    let comprobar0 = document.getElementById("password").value;
    if (comprobar == SuperUsuario && comprobar0 == SuperClave){window.location="HTML_welcome_to_chaos.html";} else{console.log(false)}});
    //if (Nikaido == SuperUsuario && TimeMachine == SuperClave){console.log(true)}else{console.log(false)}
  }
})
  conexion.end();
}

//Login2()
