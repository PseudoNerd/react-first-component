var choice = function(fruits) {
    return fruits[Math.floor(Math.random()*fruits.length)]; 
}

var remove = function(fruits, fruit) {
    for(let i = 0 ; i < fruits.length; i++){
        if(fruit === fruits[i]){
            fruits.splice(i,1);
            return fruits;
        }
    }   
}

export {choice, remove};