import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export function mergeMapExample() {
    console.log('\n--- mergeMap operator example ---');
    of('a', 'b', 'c').pipe(
        mergeMap(x => of(x.toUpperCase()))
    ).subscribe(val => console.log('mergeMap:', val));
}
