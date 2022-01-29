import { generateRandomId } from "./StringFunctions"

export const normalizeNames = (names, separator) => {
    if (names.includes(',')) {
        const namesAux = names.substring(0, names.length - 1);
        return namesAux ? namesAux.concat(separator) : '';
    }
    return names;
}

export const createPlayer = (name) => {
    return {
        id: generateRandomId(),
        name: name,
    }
}