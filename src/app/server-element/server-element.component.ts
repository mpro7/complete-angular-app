import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated is set by default
})
export class ServerElementComponent implements OnInit {
  @Input('server') element: { type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
