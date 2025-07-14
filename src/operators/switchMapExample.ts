import { of, interval } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

export function switchMapExample() {
    console.log('\n--- switchMap operator example ---');
    // Emits 0, 1, 2, then switches to new interval for each emission
    of('A', 'B', 'C').pipe(
        switchMap(val => interval(300).pipe(
            take(2)
        ))
    ).subscribe(val => console.log('switchMap:', val));
    // Output:
    // switchMap: 0
    // switchMap: 1
    // switchMap: 0
    // switchMap: 1
    // switchMap: 0
    // switchMap: 1
}
