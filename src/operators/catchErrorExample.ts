import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

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
