import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-about',
  templateUrl: './display-about.component.html',
  styleUrls: ['./display-about.component.css'],
})
export class DisplayAboutComponent implements OnInit {
  @Input()
  bio: any;
  @Input()
  skills: string[];
  constructor() {}

  ngOnInit(): void {}
}
