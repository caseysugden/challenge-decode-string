// Write your code below this line
let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

function decodeString(string) {
    let arr = string.split('');
    let num = +arr.shift();
    for (let i =0; i < arr.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (arr[i] === alphabet[j]) {
                if (alphabet[j + num] <= 26) {
                    console.log(alphabet[j + num]);
                } else {
                    console.log(alphabet[(j + num) % 26]);
                };
            };
        };
    };
};

decodeString("1xyz");