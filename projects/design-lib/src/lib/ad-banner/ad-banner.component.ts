import { Component, Input, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ComponentType } from '@angular/cdk/overlay';

@Component({
    selector: 'lib-ad-banner',
    templateUrl: './ad-banner.component.html',
    styleUrls: ['./ad-banner.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AdBannerComponent {

    @Input() loop: boolean = true;
    @Input()
    componentArray: ComponentType<{}>[] = [];
    @Input() delay?: number;
    @Input() interval: number = 1000;
    @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

    subscription !: Subscription

    ngOnInit(): void {
        this.callObservable()
    }

    ngAfterViewInit(): void {
        this.container.createComponent(this.componentArray[0])
    }

    callObservable() {
        const observable = interval(this.interval);
        this.subscription = observable.subscribe(componentIndex => this.createComponent(componentIndex, () => {
            if (!this.loop) return
            if (this.delay) {
                setTimeout(() => {
                    this.callObservable()
                }, this.delay);
            } else {
                this.callObservable()
            }
        }))
    }

    createComponent(componentIndex: number, _succ = () => { }) {
        this.container.clear()
        this.container.createComponent(this.componentArray[componentIndex])
        if (componentIndex === this.componentArray.length - 1) {
            this.subscription.unsubscribe()
            _succ()
            return
        }
    }

}
