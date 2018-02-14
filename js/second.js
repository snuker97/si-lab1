let userText1 = "parola mea".toUpperCase();
let userText1ToChar = [];
let key = "142";
let cryptedText = "";

for (let i = 0; i < userText1.length; i++) {
    if (userText1.charCodeAt(i) >= 65 && userText1.charCodeAt(i) <= 90) {
        userText1ToChar.push(userText1.charCodeAt(i) - 65);
    }
}

for (let i = 0; i < userText1ToChar.length; i++) {
    let keyPosition = i % key.length;

    cryptedText += String.fromCharCode(+(userText1ToChar[i]) + +(key[keyPosition]) + 65);
}

console.log(cryptedText);