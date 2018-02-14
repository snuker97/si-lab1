let userText;

let direction = 0; // 1 Stanga | 0 Dreapta

let shift = 13;

document.getElementById('user-text').addEventListener('keyup', () => {

    cryptMsg();

});

document.getElementsByTagName('span')[2].addEventListener('click', () => {
    direction = 1;
    shift = 26 - +(document.getElementsByClassName('value')[0].textContent);
    console.log('stanga');

    cryptMsg();
});

document.getElementsByTagName('span')[3].addEventListener('click', () => {
    direction = 0;
    shift = +(document.getElementsByClassName('value')[0].textContent);
    console.log('dreapta');

    cryptMsg();
});

document.getElementById('test5').addEventListener('mouseup', () => {
    shift = +(document.getElementsByClassName('value')[0].textContent);
    if (direction) {
        shift = 26 - shift;
    }
    console.log(shift);

    cryptMsg();
});

const cryptMsg = () => {
    userText = document.getElementById('user-text').value.toUpperCase();
    let userTextChar = [];
    let outputText = '';

    for (let i = 0; i < userText.length; i++) {
        if (userText.charCodeAt(i) >= 65 && userText.charCodeAt(i) <= 90) {
            userTextChar.push((userText.charCodeAt(i) + shift - 65) % 26 + 65);
        }
        else {
            userTextChar.push(userText.charAt(i));
        }
    }

    for (let i = 0; i < userTextChar.length; i++) {
        userTextChar[i] = String.fromCharCode(userTextChar[i]);
        outputText += userTextChar[i];
    }

    if (outputText.length) {
        document.getElementsByTagName('label')[3].classList.add('active');
        document.getElementById('disabled').value = outputText;
    }
    else {
        document.getElementsByTagName('label')[3].classList.remove('active');
        document.getElementById('disabled').value = '';
    }
};

/*

for (let i = 0; i < userText.length; i++) {
        if (userText.charCodeAt(i) >= 65 && userText.charCodeAt(i) <= 90) {
            userTextChar.push((userText.charCodeAt(i) + shift - 65) % 26 + 65);
        }
        else {
            userTextChar.push(userText.charAt(i));
        }
    }

    for (let i = 0; i < userTextChar.length; i++) {
        userTextChar[i] = String.fromCharCode(userTextChar[i]);
        outputText += userTextChar[i];
    }

 */


