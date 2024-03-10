// EXAMPLE 1
function isEnoughCapacity(products, containerSize) {
    let total = 0;
    const values = Object.values(products);

    for (const value of values) {
        total += value;
    }
    
    return total <= containerSize ? true : false;
    
};

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7));

// EXAMPLE 2
function isEnoughCapacity1(products, containerSize) {
    let sum = 0;
    for (const key in products) {
        sum += products[key];
    }
    
    return sum <= containerSize ? true : false;
};

console.log(isEnoughCapacity1({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity1({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity1({ apples: 1, lime: 5, tomatoes: 3 }, 14));
console.log(isEnoughCapacity1({ apples: 18, potatoes: 5, oranges: 2 }, 7));