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

const decoratedAdd = loggingDecorator(add);
const result = decoratedAdd(8, 5);
console.log(`Result: ${result}`);
