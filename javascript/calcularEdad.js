function calcularEdad(edad) {
    if (edad < 18) {
        console.log('Soy menor de edad');
    } else if (edad > 18 && edad < 62) {
        console.log('Soy mayor de edad');
    } else {
        console.log('Soy de la tercera edad');
    }
}