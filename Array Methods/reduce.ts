import { items } from "./exports";

// Metoda reduce efectueaza un set de operatii asupra unui array, 
// dupa care returneaza rezultatul operatiilor

const totalPrice: number = items.reduce((currentTotal: number, item: { name: string; price: number }) => {
    return currentTotal + item.price;
}, 0);

console.log(totalPrice);