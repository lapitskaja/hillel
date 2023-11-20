let i = prompt('Enter any value');
let bool = i.toLowerCase();

if (isNaN(i)){
    if (bool === 'true' || bool === 'false'){
        console.log('You entered a boolean');
    } else if (/[a-zа-яё]/i.test(i) && !/[0-9]/i.test(i)){
        console.log('You entered a string');
    } else {
        console.log('You entered a complex data');
    }
}else{
    console.log('You entered a number');
}
