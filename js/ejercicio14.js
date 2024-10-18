function temperatura(celsius){
    return celsius * 9 / 5 +32;
}
let celsius=prompt("Introduce los grados en 'celsius': ");
let fahrenheit = temperatura(celsius);
console.log(celsius + " grados Celsius son " + fahrenheit + " grados Fahrenheit.");