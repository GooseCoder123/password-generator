const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '#', '$', '%', '&', '*', '+', '-', '?', '@', '_'
]

const display = document.getElementById("display")

function generatePassword(num_characters) {
    let password = ""
    for (let i = 0; i < num_characters; i++) {
        let char = characters[Math.floor(Math.random() * characters.length) ]
        password += char
    }
    return password
}

function displayPassword() {
    const num_character = parseInt(document.getElementById("num_characters").value)
    
    if (num_character < 8) {
        alert("Your password must have at least 8 characters!")
    } else if (num_character > 32) {
        alert("Your password can't be more than 32 characters long!")
    } else {
        let password = generatePassword(num_character)
        display.value = password
    }
}