import {Component, Inject} from '@angular/core';
import {
  Profile,
  ProfileService,
  ProfileSource,
  ProfileType,
  ServerProfileDetailsRequest,
  ServerProfileSearchCriteria,
  UpdateServerProfileInfoRequest,
} from 'sunbird-sdk';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
      createdAt: Date.now(),
      grade: ['72', '77'],
      medium: ['ENGLISH'],
      profileType: ProfileType.TEACHER,
      source: ProfileSource.SERVER,
      subject: ['eng', 'maths'],
      syllabus: ["1oth"],
      gradeValue: {}
    };

    this.profileService.createProfile(req).toPromise().then((res: any) => {
      console.log('CreatedProfile?--', res);
    }).catch((err: any) => {
      console.log('err', err);
    })
  }

  deleteProfileWithUID() {
    let uid = '45359cbb-c513-4913-9ab6-1d7da75d536f';
    this.profileService.deleteProfile(uid).toPromise().then((result: any) => {
      console.log('successfully deleted.', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  getAllProfiles() {
    // const request: GetAllProfileRequest = {
    //   local: true,
    //   server: false,
    //   groupId: '22dba91b-e3e5-42d9-92cd-890380206edd'
    // };
    this.profileService.getAllProfiles().toPromise().then((success: any) => {
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
      userId: '8442887c-b03a-43fb-a862-b22d0b0c4956'

    };
    this.profileService.updateServerProfile(request).toPromise().then((result: any) => {
      console.log('success while updating', result);
    }).catch((error: any) => {
      console.log('error while updating', error);
    })
  }

  getServerProfilesDetails() {
    const request: ServerProfileDetailsRequest = {
      userId: '8442887c-b03a-43fb-a862-b22d0b0c4956',
      requiredFields: ['completeness', 'missingFields', 'lastLoginTime', 'topics']
    };
    this.profileService.getServerProfilesDetails(request).toPromise()
      .then((success: any) => {
        console.log(' successfully get ServerProfile Details', success);
      }).catch((error: any) => {
      console.log('error while getting serverProfileDetails--', error);
    });
  }

  getServerProfiles() {
    const request: ServerProfileSearchCriteria = {
      query: 'user',
      filters: {
        identifier: new Set([])
      },
      fields: ['identifier', 'lastName', 'firstName'],
      limit: 10,
      offset: 0
    };
    this.profileService.getServerProfiles(request).toPromise()
      .then((success: any) => {
        console.log('success getServerProfiles', success);
      }).catch((error: any) => {
      console.log(' error ', error);
    });
  }

  getTenantInfo() {
    this.profileService.getTenantInfo().toPromise()
      .then((success: any) => {
        console.log('success in tenant info', success);
      }).catch((error: any) => {
      console.log('error', error);
    })
  }
}
