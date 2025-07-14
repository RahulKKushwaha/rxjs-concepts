import { from } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

export function debounceTimeExample() {
    console.log('\n--- debounceTime operator example ---');
    const source$ = from([1,2,3,4,5]);
    source$.pipe(
        debounceTime(100)
    ).subscribe(val => console.log('debounceTime:', val));
}
