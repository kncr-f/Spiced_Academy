console.log('about to parse!');

function somethingStupid() {
    var n = Math.random();
    console.log(n);
    if (n > .5) {
        //throw 'funky chicken';
        throw new Error('bad luck!');
    } else {
        console.log('good luck!');
    }
}

try {
    somethingStupid();
    console.log('YAY! no exception!');
    //JSON.parse('<!doctype html><html><title>title</title><p>hi!</html>');
} catch (err) {
    console.log('caught an exception!', err);
}

console.log('parsed!');