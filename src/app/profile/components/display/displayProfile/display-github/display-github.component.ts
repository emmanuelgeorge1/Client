import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-github',
  templateUrl: './display-github.component.html',
  styleUrls: ['./display-github.component.css'],
})
export class DisplayGithubComponent implements OnInit {
  @Input()
  profile: any;
  constructor() {}

  ngOnInit(): void {}
}
