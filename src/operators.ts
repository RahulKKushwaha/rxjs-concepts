// operators.ts
// Basic to intermediate examples of popular RxJS operators

import { of, from, interval } from 'rxjs';
import { map, filter, take, mergeMap, debounceTime, catchError } from 'rxjs/operators';

export function mapExample() {
    console.log('\n--- map operator example ---');
    of(1, 2, 3).pipe(
        map(x => x * 10)
    ).subscribe(val => console.log('map:', val));
}

export function filterExample() {
    console.log('\n--- filter operator example ---');
    from([1, 2, 3, 4, 5, 6]).pipe(
        filter(x => x % 2 === 0)
    ).subscribe(val => console.log('filter:', val));
}

export function takeExample() {
    console.log('\n--- take operator example ---');
    interval(500).pipe(
        take(3)
    ).subscribe(val => console.log('take:', val));
}

export function mergeMapExample() {
    console.log('\n--- mergeMap operator example ---');
    of('a', 'b', 'c').pipe(
        mergeMap(x => of(x.toUpperCase()))
    ).subscribe(val => console.log('mergeMap:', val));
}

export function debounceTimeExample() {
    console.log('\n--- debounceTime operator example ---');
    // Simulate rapid events
    const source$ = from([1,2,3,4,5]);
    source$.pipe(
        debounceTime(100)
    ).subscribe(val => console.log('debounceTime:', val));
}

export function catchErrorExample() {
    console.log('\n--- catchError operator example ---');
    of(1, 2, 0, 3).pipe(
        map(x => {
            if (x === 0) throw new Error('Zero detected!');
            return 10 / x;
        }),
        catchError(err => {
            console.log('Caught error:', err.message);
            return of('Error handled');
        })
    ).subscribe(val => console.log('catchError:', val));
}
