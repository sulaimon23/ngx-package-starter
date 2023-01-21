import { Component, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'lib-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent {


    @ViewChildren('adBanner') bannerChildren !: QueryList<any>;
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

    ngOnInit(): void {
        // this.callObservable()
    }

    callObservable() {
        const observable = new Observable((subscriber) => {
            subscriber.next(1);
            subscriber.next(2);
            subscriber.next(3);
            setTimeout(() => {
                subscriber.next(4);
                subscriber.complete();
            }, 1000);
        });
        console.log('just before subscribe');
        observable.subscribe({
            next(x) {
                console.log('got value ' + x);
            },
            error(err) {
                console.error('something wrong occurred: ' + err);
            },
            complete() {
                console.log('done');
            },
        });
        console.log('just after subscribe');
    }

    createComponent() {
        // this.container.clear()
        // this.container.createComponent(WidgetTwoComponent)
        // Array.from(this.container.element.nativeElement.children).forEach((element: any) => {
        //     element.removeAttribute("adBanner");
        //     setTimeout(() => {
        //         console.log(this.container.element.nativeElement.children)
        //     }, 100);
        // })
    }
}
