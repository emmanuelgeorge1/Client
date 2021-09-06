import { Component, Input, OnInit } from '@angular/core';
import { Createprofile } from 'src/app/profile/model/create-profile';

@Component({
  selector: 'app-display-item',
  templateUrl: './display-item.component.html',
  styleUrls: ['./display-item.component.css'],
})
export class DisplayItemComponent implements OnInit {
  @Input()
  profile: Createprofile;
  constructor() {}

  ngOnInit(): void {}
}
