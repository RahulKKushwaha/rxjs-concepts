import { Observable } from 'rxjs';

export function main() {
    const wrapArrayIntoObservable = (arr: any[]) => {
        return new Observable(subscriber => {
            for (let item of arr) {
                subscriber.next(item);
            }
            subscriber.complete();
        });
    };

    const data = [1, 2, 3, 4, 5];
    const observable = wrapArrayIntoObservable(data);

    observable.subscribe(val => console.log('Subscriber 1: ' + val));
    observable.subscribe(val => console.log('Subscriber 2: ' + val));
}