export const capitalizeFirstLetter = ([first, ...rest]) =>
    first.toLocaleUpperCase() + rest.join('');

export const generateRandomId = () =>
    Math.random().toString(36).substr(2, 22);