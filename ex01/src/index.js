const array1 = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function main(arr) {
    let array2 = [...array1]; 
    array2 = [...arr];
    return array2;
}
console.log(main(array1));
module.exports = main;