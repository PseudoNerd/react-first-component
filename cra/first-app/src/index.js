import fruits from './foods';
import {choice,remove} from './helper';

console.log("Connected");

console.log(choice(fruits));

console.log(fruits);


console.log(remove(fruits,choice(fruits)));
