
const square_array = (arr = []) => {

    return arr.map(num => {

        return parseInt(num) * parseInt(num);
    }).filter(a => !isNaN(a)).sort((a, b) => a - b);
}

console.log(square_array(['1', 'Carlos', 2, 3, 5, 6, 8, 9]));

console.log(square_array([-2, -1]));

console.log(square_array([-10, -5, 0, 5, 10]));
