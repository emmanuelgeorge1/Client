import { Component, OnInit } from '@angular/core';
import { Createprofile } from 'src/app/profile/model/create-profile';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { Register } from 'src/app/user/model/register';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userDetail: Register = JSON.parse(
    localStorage.getItem('userDetails') || '{}'
  );
  errors: any;
  profile: Createprofile = {
    handle: '',
    status: '',
    company: '',
    website: '',
    location: '',
    skills: [],
    gitusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  };
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => console.log(JSON.stringify(res)),
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.console.error();
      }
    );
  }
}
