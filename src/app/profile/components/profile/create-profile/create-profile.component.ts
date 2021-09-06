import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Createprofile } from 'src/app/profile/model/create-profile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  createProfile: any = {};
  errors: any = {};
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}
  profileSubmit() {
    console.log(JSON.stringify(this.createProfile));
    this.profileService.createProfile(this.createProfile).subscribe(
      (res) => {
        console.log(JSON.stringify(res)),
          this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }
}
