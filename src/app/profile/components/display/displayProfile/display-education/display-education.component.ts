import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-education',
  templateUrl: './display-education.component.html',
  styleUrls: ['./display-education.component.css'],
})
export class DisplayEducationComponent implements OnInit {
  @Input()
  education: any;
  constructor() {}

  ngOnInit(): void {}
}
