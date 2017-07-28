function calcularEdad(edad) {
    if (edad < 18) {
        console.log('Soy menor de edad');
    } else if (edad > 18 && edad < 62) {
        console.log('Soy mayor de edad');
    } else {
        console.log('Soy de la tercera edad');
    }
}

//Otra

function CalcularEdad(edad) {
	if (edad <=17) {
		console.log("eres menor de edad")
	}
	else if(edad <= 59){
		console.log("eres mayor de edad")
	}
	else if(edad >= 60){
		console.log("eres de la tercera edad")
	}
}
