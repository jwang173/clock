import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-clock',
  template: `<h1 (click)="output.next('output')">Alert {{type}}</h1>`,
  // templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  @Input() type: string = "success";
  @Output() output = new  EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
