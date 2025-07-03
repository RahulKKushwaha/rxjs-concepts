import { Subject } from 'rxjs';

const hotObservable = new Subject<number>(); // Hot: starts emitting regardless of subscriptions

hotObservable.subscribe(value => console.log('Subscriber A:', value));

hotObservable.next(1); // Emitted only to A

hotObservable.subscribe(value => console.log('Subscriber B:', value));

hotObservable.next(2); // Emitted to both A and B
