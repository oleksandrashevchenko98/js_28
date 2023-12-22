let base = prompt("Введіть число:");
let exponent = prompt("Введіть ступінь:");
function pow(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * pow(base, exponent - 1);
}
if (!isNaN(base) && !isNaN(exponent)) {
    let result = pow(base, exponent);
    document.write(`${base} у ${exponent} ступені дорівнює ${result}. `);
} else {
    document.write("Invalid input. Please enter valid numbers.");
}



function removeElement(array, itemToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === itemToRemove) {
            array.splice(i, 1);
            i--;
        }
    }
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);



function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters.charAt(randomIndex);
    }
    return result;
}
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
alert(key);
