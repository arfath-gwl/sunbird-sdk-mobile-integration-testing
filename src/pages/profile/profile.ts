import {Component, Inject} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {
  Profile,
  ProfileRequest,
  ProfileService,
  ProfileSource,
  ProfileType,
  UpdateServerProfileInfoRequest,
} from 'sunbird-sdk';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    @Inject('PROFILE_SERVICE') private profileService: ProfileService) {
  }

  createProfile() {
    const req: Profile = {
      uid: '1235',
      handle: 'Hello',
      board: ['cbse', 'icse', 'bhojpuri'],
      created_at: Date.now(),
      grade: ['72', '77'],
      medium: ['ENGLISH'],
      profile_type: ProfileType.TEACHER,
      source: ProfileSource.LOCAL,
      subject: ['eng', 'maths'],
      syllabus: ["1oth"],
      grade_value: []
    }
    this.profileService.createProfile(req).toPromise().then((res: any) => {
      console.log('CreatedProfile?--', res);
    }).catch((err: any) => {
      console.log('err', err);
    })
  }

  deleteProfile() {
    let uid = '12345';
    this.profileService.deleteProfile(uid).toPromise().then((result: any) => {
      console.log('successfully deleted.', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  getAllProfile() {
    const request: ProfileRequest = {
      local: true,
      server: true,
      groupId: 'group1'
    };
    this.profileService.getAllProfiles(request).toPromise().then((success: any) => {
      console.log('successfully got all profiles', success)
    }).catch((error: any) => {
      console.log('error while getting all profiles', error);
    })
  }

  getCurrentProfile() {
    this.profileService.getCurrentProfileSession().toPromise().then((result: any) => {
      console.log('getCurrentProfileSession', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  updateServerProfile() {
    const request: UpdateServerProfileInfoRequest = {
      userId: 'dummyId',
      phone: '911'

    };
    this.profileService.updateServerProfile(request).toPromise().then((result: any) => {
      console.log('success while updating', result);
    }).catch((error: any) => {
      console.log('error while updating', error);
    })
  }
}