import { of, Subject } from 'rxjs';

const coldObservable = of(1,2,3,4) // Hot: starts emitting regardless of subscriptions

coldObservable.subscribe(value => console.log('Subscriber A:', value)); 
coldObservable.subscribe(value => console.log('Subscriber B:', value)); 
