import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptors } from '../shared/interceptors';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';
import { DisplayItemComponent } from './components/display/display-item/display-item.component';
import { DisplayProfilesComponent } from './components/display/display-profiles/display-profiles.component';
import { DisplayAboutComponent } from './components/display/displayProfile/display-about/display-about.component';
import { DisplayCredsComponent } from './components/display/displayProfile/display-creds/display-creds.component';
import { DisplayEducationComponent } from './components/display/displayProfile/display-education/display-education.component';
import { DisplayExperienceComponent } from './components/display/displayProfile/display-experience/display-experience.component';
import { DisplayGithubComponent } from './components/display/displayProfile/display-github/display-github.component';
import { DisplayHeaderComponent } from './components/display/displayProfile/display-header/display-header.component';
import { DisplayProfileComponent } from './components/display/display-profile/display-profile.component';

@NgModule({
  declarations: [
    CreateProfileComponent,
    AddEduComponent,
    AddExpComponent,
    DisplayItemComponent,
    DisplayProfilesComponent,
    DisplayProfileComponent,
    DisplayAboutComponent,
    DisplayCredsComponent,
    DisplayEducationComponent,
    DisplayExperienceComponent,
    DisplayGithubComponent,
    DisplayHeaderComponent,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
