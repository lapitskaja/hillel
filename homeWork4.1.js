let i = prompt ('Enter a number');

if(i % 3 === 0 && i % 5 === 0){
    alert('FizzBuzz');
} else if(i % 3 === 0){
    alert('Fizz');
} else if(i % 5 === 0){
    alert('Buzz');
} else {
    alert('Non Divisible');
}