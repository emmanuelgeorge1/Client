import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-header',
  templateUrl: './display-header.component.html',
  styleUrls: ['./display-header.component.css'],
})
export class DisplayHeaderComponent implements OnInit {
  @Input()
  name: any;
  @Input()
  company: any;
  @Input()
  status: any;
  @Input()
  location: any;
  constructor() {}

  ngOnInit(): void {}
}
