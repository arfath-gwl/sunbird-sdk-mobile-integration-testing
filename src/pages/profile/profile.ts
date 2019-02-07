import {Component, Inject} from '@angular/core';
import {
  GetAllProfileRequest,
  Profile,
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
      uid: '',
      handle: 'Shuvranil',
      board: ['cbse', 'icse', 'bhojpuri'],
      createdAt: Date.now(),
      grade: ['72', '77'],
      medium: ['ENGLISH'],
      profileType: ProfileType.TEACHER,
      source: ProfileSource.SERVER,
      subject: ['eng', 'maths'],
      syllabus: ["1oth"],
      gradeValue: {'key': 'A+'}
    };
    this.profileService.createProfile(req).toPromise().then((res: any) => {
      console.log('CreatedProfile?--', res);
    }).catch((err: any) => {
      console.log('err', err);
    })
  }

  deleteProfile() {
    let uid = '0286aa65-7519-479e-8ead-7784883d2d86';
    this.profileService.deleteProfile(uid).toPromise().then((result: any) => {
      console.log('successfully deleted.', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  updateServerProfiles() {
    const request: UpdateServerProfileInfoRequest = {
      userId: 'd60b31bd-089c-4e9a-87ec-1bf859284964',
      phone: '9019720923'
    };
    this.profileService.updateServerProfile(request).toPromise().then((result: any) => {
      console.log('profile updated', result);
    }).catch((error: any) => {
      console.log('could not updated', error);
    });
  }

  // getServerProfiles() {
  //   const request: ServerProfileSearchCriteria = {
  //     query: 'user',
  //     identifiers: ['659b011a-06ec-4107-84ad-955e16b0a48a'],
  //     fields: ['identifier', 'lastName', 'firstName'],
  //     offset: 0,
  //     limit: 10
  //   };
  //   this.profileService.getServerProfiles(request).toPromise().then((result: any) => {
  //     console.log('ServerProfileSearchCriteria--', result);
  //   }).catch((err: any) => {
  //     console.log('error while searching server Profiles', err);
  //   })
  // }

  getTenantInfo() {
    // TODO
  }

  getAllProfile() {
    const request: GetAllProfileRequest = {
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

  getServerProfilesDetails() {
    // TODO
  }

  setCurrentProfile() {
    let uid = 'd60b31bd-089c-4e9a-87ec-1bf859284964';
    this.profileService.setCurrentProfile(uid).toPromise().then((res: any) => {
      console.log('set Current Profile--', res);
    }).catch((err: any) => {
      console.log('err while setting current profile', err);
    });
  }

  getCurrentProfile() {
    this.profileService.getCurrentProfile().toPromise().then((result: any) => {
      console.log('getCurrentProfile', result);
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
