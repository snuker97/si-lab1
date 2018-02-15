let userText1;
let key = "142";


document.getElementById('user-text1').addEventListener('keyup', () => {
    crypt1();
});

document.getElementById('user-key').addEventListener('keyup', () => {
    crypt1();
});

const crypt1 = () => {
    if (document.getElementById('user-key').value) {
        let userText1ToChar = [];
        let cryptedText = "";

        userText1 = document.getElementById('user-text1').value.toUpperCase();
        console.log(userText1);

        key = document.getElementById('user-key').value;
        console.log(key);

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

        if (cryptedText.length) {
            document.getElementsByTagName('label')[6].classList.add('active');
            document.getElementById('disabled1').value = cryptedText;
        }
        else {
            document.getElementsByTagName('label')[6].classList.remove('active');
            document.getElementById('disabled1').value = '';
        }
    }
};




