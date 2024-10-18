function Palindromo(string) {
    var normalizedString = string.toLowerCase().replace(/[\W_]/g, '');
  
    // Compararán la cadena normalizada con su versión invertida.
    var reversedString = normalizedString.split('').reverse().join('');
  
    // Devolverá true si las cadenas son iguales.
    return normalizedString === reversedString;
}
let palabra=prompt("Introduce una palabra para saber si es palindromo: ");
if (Palindromo(palabra)){
    console.log(palabra + " Es una palabra palindromo")
}else{
    console.log(palabra + " Esta palabra no es palindromo")
}