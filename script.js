var dbutton = document.getElementById("dbutton");
var ebutton = document.getElementById("buttonenc");
var mensaje = document.getElementById("mensaje");
var encriptado = document.getElementById('encriptado');
var desencriptado = document.getElementById('encriptado');
var t_enc = document.getElementById("t_enc");
var aclaracion = document.getElementById("aclaracion");
var sin_mensaje = document.getElementById("sin_mensaje");
var imagen = document.getElementById('muneco');
var copyButton = document.getElementById('copyButton')
var resetButton = document.getElementById('resetButton')
var cuadro_enc = document.getElementById("cuadro_enco");


	if (mensaje.value == "") { copyButton.style.display = 'none'; }

function encriptar() {
	
	if (mensaje.value != "") {
		encriptado.style.display= 'block';
		cuadro_enc.style.display = 'none';
		encriptado.style.background = '#daffd1';
		t_enc.style.display = 'block';
		t_enc.innerHTML= "Su mensaje encriptado es:";
		encriptado.innerHTML= mensaje.value.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
		copyButton.style.display = 'block';
		resetButton.style.display = 'block';
		desencriptado.focus()
	};

	if (mensaje.value == "") {
		t_enc.display= 'none';
		encriptado.style.display= 'none';
		cuadro_enc.style.display = 'block';
		encriptado.style.background = 'none';
		copyButton.style.display = 'none';
		resetButton.style.display = 'none';
	};				
}
  
function desencriptar() {
	
	if (mensaje.value != "") {
		encriptado.style.display= 'block';
		cuadro_enc.style.display = 'none';
		encriptado.style.background = '#daffd1';
		t_enc.innerHTML= "Su mensaje desencriptado es:";
		t_enc.style.display = 'block';
		desencriptado.innerHTML= mensaje.value.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
		copyButton.style.display = 'block';
		resetButton.style.display = 'block';
		desencriptado.focus()
	};

	if (mensaje.value == "") {
		t_enc.display= 'none';
		encriptado.style.display = 'none';
		cuadro_enc.style.display = 'block';
		encriptado.style.background = 'none';
		copyButton.style.display = 'none';
		resetButton.style.display = 'none';
	};	
}

function copy() {
  var aux = document.createElement("input");
  aux.setAttribute("value", encriptado.innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

function reset() {
	t_enc.innerHTML= "";
	encriptado.style.display= 'none';
	cuadro_enc.style.display = 'block';
	encriptado.style.background = 'none';
	copyButton.style.display = 'none';
	resetButton.style.display = 'none';
	if (mensaje.value != "") {
		mensaje.value = ""
		mensaje.focus()
	}
}

dbutton.onclick = desencriptar;
ebutton.onclick = encriptar;