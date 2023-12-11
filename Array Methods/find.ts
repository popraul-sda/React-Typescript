import { items } from "./exports";

// Metoda find cauta un anume element intr-un array

const foundItem = items.find(item => item.name === 'book1');

console.log(foundItem);