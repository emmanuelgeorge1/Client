import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  errors: any = {};
  profile: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']), (this.profile = res);
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
  }
}
