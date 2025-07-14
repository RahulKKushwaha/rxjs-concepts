import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export function mapExample() {
    console.log('\n--- map operator example ---');
    of(1, 2, 3).pipe(
        map(x => x * 10)
    ).subscribe(val => console.log('map:', val));
}
