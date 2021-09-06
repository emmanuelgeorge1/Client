import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  experince: any = {};
  errors: any = {};
  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {}
  experienceSubmit() {
    this.profileService.addExperince(this.experince).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
        console.log(JSON.stringify(res));
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }
}
