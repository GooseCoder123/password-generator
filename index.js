import "Math"

const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '#', '$', '%', '&', '*', '+', '-', '?', '@', '_'
]

let display = document.getElementById("display")
let num_character = document.getElementById("num_characters")
let generate = document.getElementById("generate_btn")

function generatePassword(num_characters) {
    let password = ""
    for (let i = 0; i < 12; i++) {
        let char = characters[Math.random() * 73]
        password += char
    }
    return password
}

