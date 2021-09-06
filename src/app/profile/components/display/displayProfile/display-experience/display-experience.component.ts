import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-experience',
  templateUrl: './display-experience.component.html',
  styleUrls: ['./display-experience.component.css'],
})
export class DisplayExperienceComponent implements OnInit {
  @Input()
  experience: any;
  constructor() {}

  ngOnInit(): void {}
}
