import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

export function concatMapExample() {
    console.log('\n--- concatMap operator example ---');
    of('A', 'B', 'C').pipe(
        concatMap(val => of(val + ' processed').pipe(delay(500)))
    ).subscribe(val => console.log('concatMap:', val));
    // Output (with ~500ms delay between each):
    // concatMap: A processed
    // concatMap: B processed
    // concatMap: C processed
}
