
import type { ICharacter } from "./Character";

export async function GetChar(name:string, userid:string){
    const url = `http://localhost:8070/load/character/${name}/${userid}`
    try {
        let response = await fetch(url)

        if (!response.ok) {
            console.error(`Failed to fetch characters. Status: ${response.status}`)
            return null
        }
        const char = await response.json()
        console.log("Retrieved character:", char)
        return {
            ...char,
            permwill: char.permwill ?? 0,
            maxbloodpool: char.maxbloodpool ?? 0,
            merits: char.merits ?? [],
            flaw: char.flaw ?? [],
        }
    }catch (error) {
        console.error("Error fetching character:", error);
        return null;
    }
}

export async function GetAllChar(userid:string) {
    const url = `http://localhost:8070/load/allnames/${userid}`
    let response = await fetch(url)
    let charNames = await response.json() as string[]
    return charNames
}

export async function UpdateChar(charData:ICharacter) {
    
    return charData
}