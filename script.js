function encriptar() {
	let texto = document.getElementById("texto-encriptar").value;
	let resultado = "";
	
	for (let i = 0; i < texto.length; i++) {
		let ascii = texto.charCodeAt(i);
		resultado += String.fromCharCode(ascii + 1);
	}
	
	document.getElementById("texto-encriptado").value = resultado;
}

function desencriptar() {
	let texto = document.getElementById("texto-desencriptar").value;
	let resultado = "";
	
	for (let i = 0; i < texto.length; i++) {
		let ascii = texto.charCodeAt(i);
		resultado += String.fromCharCode(ascii - 1);
	}
	
	document.getElementById("texto-desencriptado").value = resultado;
}

function copiarTexto(id) {
	let input = document.getElementById(id);
	
	input.select();
	input.setSelectionRange(0, 99999);
	
	document.execCommand("copy");
}