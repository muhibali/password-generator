const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassEl = document.getElementById("first-pass");
let secondPassEl = document.getElementById("second-pass");


function randomPasswordGenerator() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        let index = Math.floor(Math.random()*91);
        let char = characters[index];
        password += char;
    }
    return password;
}

function setPasswords() {
    let passwords = [randomPasswordGenerator(), randomPasswordGenerator()];
    firstPassEl.textContent = passwords[0];
    secondPassEl.textContent = passwords[1];
}

