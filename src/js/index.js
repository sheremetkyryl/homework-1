//N1

const age = 14;
console.log(age);

//N2

const name = "Kyryl";
console.log(name);

//N3

const isStudent = true;
console.log(isStudent);

//N4

const myString = "У моєму словнику немає слова «неможливо»";
console.log(myString)

//5

let myNumber = 78;
myNumber = myNumber + 10;
console.log(myNumber);

//6

const myNull = null;
console.log(myNull);

//7 

const userName = prompt("Введіть ваше ім'я");
console.log(userName);

alert("Вітаю " + userName);

//8 

const userResponce = confirm("Ви підтверджуєте вашу дію?");
console.log(userResponce);

if (userResponce) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}

//9 

alert("Увага! Ця дія небезпечна,підвердіть що ви хочете її зробити")
const userConfirm = confirm("Ви підтверджуєте вашу дію?")
if (userConfirm) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}