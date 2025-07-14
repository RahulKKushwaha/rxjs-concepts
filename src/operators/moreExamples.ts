import { from } from 'rxjs';
import { distinct, first, last, skip, takeWhile, tap, filter } from 'rxjs/operators';

export function distinctExample() {
    console.log('\n--- distinct operator example ---');
    from([1, 2, 2, 3, 4, 4, 5]).pipe(
        distinct()
    ).subscribe(val => console.log('distinct:', val));
    // Output:
    // distinct: 1
    // distinct: 2
    // distinct: 3
    // distinct: 4
    // distinct: 5
}

export function firstExample() {
    console.log('\n--- first operator example ---');
    from([10, 20, 30]).pipe(
        first()
    ).subscribe(val => console.log('first:', val));
    // Output:
    // first: 10
}

export function lastExample() {
    console.log('\n--- last operator example ---');
    from([10, 20, 30]).pipe(
        last()
    ).subscribe(val => console.log('last:', val));
    // Output:
    // last: 30
}

export function skipExample() {
    console.log('\n--- skip operator example ---');
    from([1, 2, 3, 4, 5]).pipe(
        skip(2)
    ).subscribe(val => console.log('skip:', val));
    // Output:
    // skip: 3
    // skip: 4
    // skip: 5
}

export function takeWhileExample() {
    console.log('\n--- takeWhile operator example ---');
    from([2, 4, 6, 7, 8]).pipe(
        takeWhile(x => x % 2 === 0)
    ).subscribe(val => console.log('takeWhile:', val));
    // Output:
    // takeWhile: 2
    // takeWhile: 4
    // takeWhile: 6
}

export function tapExample() {
    console.log('\n--- tap operator example ---');
    from([1, 2, 3]).pipe(
        tap(x => console.log('side effect:', x)),
        filter(x => x > 1)
    ).subscribe(val => console.log('tap:', val));
    // Output:
    // side effect: 1
    // side effect: 2
    // tap: 2
    // side effect: 3
    // tap: 3
}
