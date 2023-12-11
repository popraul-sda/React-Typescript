
// Metoda filter returneaza un array care contine doar elementele care satisfac o anumita conditie

import { items } from './exports';

const filteredItems = items.filter(item => item.name !== 'bike1');

console.log(filteredItems);