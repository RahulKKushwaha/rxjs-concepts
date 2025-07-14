import { of, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';

export function exhaustMapExample() {
    console.log('\n--- exhaustMap operator example ---');
    // Only the first inner observable is subscribed to until it completes
    of('X', 'Y', 'Z').pipe(
        exhaustMap(val => interval(200).pipe(
            take(2)
        ))
    ).subscribe(val => console.log('exhaustMap:', val));
    // Output:
    // exhaustMap: 0
    // exhaustMap: 1
}
