import { of, interval } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

export function mergeMapExample2() {
    console.log('\n--- mergeMap operator (concurrent) example ---');
    // All inner observables run concurrently
    of('A', 'B').pipe(
        mergeMap(val => interval(100).pipe(
            take(2)
        ))
    ).subscribe(val => console.log('mergeMap2:', val));
    // Output:
    // mergeMap2: 0
    // mergeMap2: 0
    // mergeMap2: 1
    // mergeMap2: 1
}
