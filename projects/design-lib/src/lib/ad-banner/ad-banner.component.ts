import { Component, Input, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
    selector: 'lib-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent {

    @Input() componentArray: any
    @Input() interval: number = 2000
    @ViewChildren('adBanner') bannerChildren !: QueryList<any>;
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;



    ngOnInit(): void {
        this.callObservable()
    }

    callObservable() {
        const observable = interval(this.interval);
        const subscription: Subscription = observable.subscribe(componentIndex => this.createComponent(componentIndex, subscription))
    }

    createComponent(componentIndex: number, subscription: Subscription) {
        console.log(componentIndex)
        this.container.clear()
        this.container.createComponent(this.componentArray[componentIndex])
        if (componentIndex === this.componentArray.length - 1) {
            subscription.unsubscribe()
            return
        }
    }
}
