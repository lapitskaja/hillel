
function withLog(fn) {
    return function(...args) {
        console.log(`${fn.name || 'annonim'}, args: ${args.join(', ')}`);
        return fn.apply(this, args);
    };
}


function mult(a, b) {
    return a * b;
}

const a = parseFloat(prompt('Enter the first argument:'));

const sleep = ms => new Promise(x => setTimeout(x, ms));

const wait = sleep(200);
console.log('sleep started');
await wait;
console.log('sleep done');

const b = parseFloat(prompt('Enter the second argument:'));

const addFn = withLog((a, b) => a + b);
console.log(`addFn: ${addFn(a, b)}`);

const subFn = withLog((a, b) => a - b);
console.log(`subFn: ${subFn(a, b)}`);

const multFn = withLog(mult);
console.log(`multFn: ${multFn(a, b)}`);
