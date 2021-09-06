import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Createprofile } from '../model/create-profile';
import { Education } from '../model/education';
import { Experinces } from '../model/experinces';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'api/profile/';
  constructor(private httpClient: HttpClient) {}

  createProfile(profileData: Createprofile): Observable<any> {
    return this.httpClient.post(this.api, profileData);
  }
  addExperince(experinceData: Experinces): Observable<any> {
    return this.httpClient.post(this.api + 'experience', experinceData);
  }
  addEducation(educationeData: Education): Observable<any> {
    return this.httpClient.post(this.api + 'education', educationeData);
  }
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }
  getProfiles(): Observable<any> {
    return this.httpClient.get(this.api + 'all');
  }
  deleteProfile(): Observable<any> {
    return this.httpClient.delete('/api/profile');
  }

  deleteExperience(id: string): Observable<any> {
    return this.httpClient.delete(this.api + 'experience/' + id);
  }

  deleteEducation(id: string): Observable<any> {
    return this.httpClient.delete(this.api + 'education/' + id);
  }

  getProfileDetailsByUserId(_userId: string) {
    return this.httpClient.get('/api/profile/all/' + _userId);
  }
}
