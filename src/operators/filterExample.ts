import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

export function filterExample() {
    console.log('\n--- filter operator example ---');
    from([1, 2, 3, 4, 5, 6]).pipe(
        filter(x => x % 2 === 0)
    ).subscribe(val => console.log('filter:', val));
    // Output:
    // filter: 2
    // filter: 4
    // filter: 6

    // Example 2: filter odd numbers
    from([10, 11, 12, 13, 14]).pipe(
        filter(x => x % 2 !== 0)
    ).subscribe(val => console.log('odd filter:', val));
    // Output:
    // odd filter: 11
    // odd filter: 13

    // Example 3: filter strings by length
    from(['apple', 'kiwi', 'banana', 'pear']).pipe(
        filter(str => str.length > 4)
    ).subscribe(val => console.log('long string:', val));
    // Output:
    // long string: apple
    // long string: banana

    // Example 4: filter objects by property
    from([
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 17 },
        { name: 'Carol', age: 30 }
    ]).pipe(
        filter(person => person.age >= 18)
    ).subscribe(val => console.log('adult:', val));
    // Output:
    // adult: { name: 'Alice', age: 25 }
    // adult: { name: 'Carol', age: 30 }
}
