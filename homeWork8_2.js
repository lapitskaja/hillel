function loggingDecorator(originalFunction) {
    return function (...args) {
        console.log(`${originalFunction.name}, args: ${args.join(', ')}`);
        const result = originalFunction.apply(this, args);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const arg1 = parseFloat(prompt('Enter the first argument:'));
const arg2 = parseFloat(prompt('Enter the second argument:'));
const decoratedAdd = loggingDecorator(add);
const result = decoratedAdd(arg1, arg2);
console.log(`Result: ${result}`);
