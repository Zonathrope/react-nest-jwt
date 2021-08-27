import * as hash from 'password-hash'

export async function hashString(string: String){
    return hash.generate(string)
}