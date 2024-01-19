import { getDisplayLists } from "./getDisplayLists.js"


export const isValidCommand = (command) => {
 const commandLists = { "goto": 'Go to', "display": 'Display', "play": 'Play', "clear": "Clear", "help": "Help" }


 return commandLists[getDisplayLists(command)[0]] ? true : false
}