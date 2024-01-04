import { getDisplayLists } from "./getDisplayLists.js"


export const isValidCommand = (command) => {
 const commandLists = { "Goto": 'Go to', "Display": 'Display', "Play": 'Play', "Clear": "Clear", "Help": "Help" }


 return commandLists[getDisplayLists(command)[0]] ? true : false
}