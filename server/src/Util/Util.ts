import * as hash from 'password-hash'

//hash a string
export async function hashString(string: String){
    return hash.generate(string)
}

// Compares a plain-text password (password) to a hashed password (hashedPassword) and returns a boolean. Both arguments are required.
export async function checkHashedString(normalString: String, hashedString: String){
    return hash.verify(normalString, hashedString)
}
