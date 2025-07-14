import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

export function takeExample() {
    console.log('\n--- take operator example ---');
    interval(500).pipe(
        take(3)
    ).subscribe(val => console.log('take:', val));
}
