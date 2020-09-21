import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ClockComponent } from './clock/clock.component';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template:`<h1 #clockContainer> Container</h1>
  <button (click)="createComponent()">click it</button>
  <h2>London Clock</h2>
  <p>The time now is {{time}}</p>`,
  entryComponents: [ClockComponent],
})
export class AppComponent {
  title:string = 'Hello-world';
  time:string='';
  @ViewChild('clockContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<ClockComponent>;

  constructor(private resolver: ComponentFactoryResolver) {
    
  }

  createComponent() {

    this.container.clear();

    const factory: ComponentFactory<ClockComponent> = this.resolver.resolveComponentFactory(ClockComponent);

    this.componentRef = this.container.createComponent(factory); // Internally this method will call the create() method from the factory and will append the component as a sibling to our container.

    console.log('componentRef',this.componentRef);

    this.componentRef.instance.type = Math.random() + '';

    this.time = new Date().toTimeString();
     
    console.log('time',this.time);
  }
}
