import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-creds',
  templateUrl: './display-creds.component.html',
  styleUrls: ['./display-creds.component.css'],
})
export class DisplayCredsComponent implements OnInit {
  @Input()
  profile: any;
  constructor() {}

  ngOnInit(): void {}
}
