const small_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const big_letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const special_characters = ['!', '#', '$', '%', '&', '*', '+', '-', '?', '@', '_']

const display = document.getElementById("display")

function generatePassword(num_characters, ifBigLetters, ifNumbers, ifSpecialCharacters) {
    let password = ""
    let characters = small_letters

    if (ifBigLetters) {
        characters = characters.concat(big_letters)
    } if (ifNumbers) {
        characters  = characters.concat(numbers)
    } if (ifSpecialCharacters) {
        characters  = characters.concat(special_characters)
    }
    
    for (let i = 0; i < num_characters; i++) {
        let char = characters[Math.floor(Math.random() * characters.length) ]
        password += char
    }
    return password
}

function displayPassword() {
    const num_character = parseInt(document.getElementById("num_characters").value)
    const big_check = document.getElementById("big_letters").checked
    const numbers_check = document.getElementById("numbers").checked
    const special_check = document.getElementById("special_char").checked

    if (num_character < 8) {
        alert("Your password must have at least 8 characters!")
    } else if (num_character > 32) {
        alert("Your password can't be more than 32 characters long!")
    } else {
        let password = generatePassword(num_character, big_check, numbers_check, special_check)
        display.value = password
    }
}