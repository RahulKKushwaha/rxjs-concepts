import { distinctExample, firstExample, lastExample, skipExample, takeWhileExample, tapExample } from './src/operators/moreExamples';
// ...existing code...
import { switchMapExample } from './src/operators/switchMapExample';
import { exhaustMapExample } from './src/operators/exhaustMapExample';
import { mergeMapExample2 } from './src/operators/mergeMapExample2';
// ...existing code...
// entry.ts
// Entry point for selecting and running different RxJS concept demos

import { main as runWrapArrayDemo } from './src/index';
import { mapExample } from './src/operators/mapExample';
import { filterExample } from './src/operators/filterExample';
import { takeExample } from './src/operators/takeExample';
import { mergeMapExample } from './src/operators/mergeMapExample';
import { debounceTimeExample } from './src/operators/debounceTimeExample';
import { catchErrorExample } from './src/operators/catchErrorExample';
import { concatMapExample } from './src/operators/concatMapExample';

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('Select a program to run:');
console.log('1. Wrap Array Into Observable');
console.log('2. map operator');
console.log('3. filter operator');
console.log('4. take operator');
console.log('5. mergeMap operator');
console.log('6. debounceTime operator');


console.log('7. catchError operator');
console.log('8. concatMap operator');
console.log('9. switchMap operator');
console.log('10. exhaustMap operator');

console.log('11. mergeMap (concurrent) operator');
console.log('12. distinct operator');
console.log('13. first operator');
console.log('14. last operator');
console.log('15. skip operator');
console.log('16. takeWhile operator');
console.log('17. tap operator');

rl.question('Enter your choice (number): ', (answer: string) => {
    switch (answer.trim()) {
        case '1':
            runWrapArrayDemo();
            break;
        case '2':
            mapExample();
            break;
        case '3':
            filterExample();
            break;
        case '4':
            takeExample();
            break;
        case '5':
            mergeMapExample();
            break;
        case '6':
            debounceTimeExample();
            break;
        case '7':
            catchErrorExample();
            break;
        case '8':
            concatMapExample();
            break;
        case '9':
            switchMapExample();
            break;
        case '10':
            exhaustMapExample();
            break;
        case '11':
            mergeMapExample2();
            break;
        case '12':
            distinctExample();
            break;
        case '13':
            firstExample();
            break;
        case '14':
            lastExample();
            break;
        case '15':
            skipExample();
            break;
        case '16':
            takeWhileExample();
            break;
        case '17':
            tapExample();
            break;
        default:
            console.log('Invalid choice.');
    }
    rl.close();
});
