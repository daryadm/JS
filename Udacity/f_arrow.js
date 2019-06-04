setTimeout(() => {
    console.log('starting the test');
    test.start();
}, 2000);

setTimeout( _ => {
    console.log('starting the test');
    test.start();
}, 2000);

const vowels = 'aeiou'.split('');
const bigVowels = vowels.map( (letter) => letter.toUpperCase() );

const vowels = 'aeiou'.split('');
const bigVowels = vowels.map( letter => letter.toUpperCase() );