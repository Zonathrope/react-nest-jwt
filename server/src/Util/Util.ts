import * as bcrypt from 'bcrypt'

//hash a string
export async function hashString(string: string){
    return await bcrypt.hash(string, 10)
}

// Compares a plain-text password (password) to a hashed password (hashedPassword) and returns a boolean. Both arguments are required.
export async function checkHashedString(normalString: string, hashedString: string){
    return await bcrypt.compare(normalString, hashedString)
}
