import { items } from "./exports";

// Metoda some returneaza true sau false pe baza unei conditii,
// daca un singur element din array respecta conditia atunci se va returna true altfel false

const hasItemsOver10Lei = items.some(item => item.price > 10);

console.log(hasItemsOver10Lei);

// Metoda every are acelasi return ca si functia some, 
// dar aici trebuie ca toate itemele din array sa respecte conditia pentru ca functia sa returneze true



const hasOnlyItemsOver12Lei = items.some(item => item.price > 12);

console.log(hasOnlyItemsOver12Lei);