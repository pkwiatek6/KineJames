import mongoose from "mongoose";
import CharacterModel from "./Char.model";

export function run(){
    try {
        mongoose.connect("mongodb://localhost:27017")
    } catch(e){
        console.log(e.message)
    }
}


export async function loadChar(disUser: string){
    try {
        console.log("Connecting to db")
        const character = await CharacterModel.find({disUser : disUser})
        console.log(character)
    } catch (e) {
        console.log(e.message)
    }
}