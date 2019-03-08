import {Component, Inject} from '@angular/core';
import {
  AcceptTermsConditionRequest,
  GenerateOtpRequest,
  GetAllProfileRequest,
  IsProfileAlreadyInUseRequest,
  Profile,
  ProfileService,
  ProfileSource,
  ProfileType,
  ServerProfileDetailsRequest,
  ServerProfileSearchCriteria,
  UpdateServerProfileInfoRequest,
  VerifyOtpRequest
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
      handle: 'Hello',
      board: ['cbse', 'icse', 'bhojpuri'],
      createdAt: Date.now(),
      grade: ['72', '77'],
      medium: ['ENGLISH'],
      profileType: ProfileType.TEACHER,
      source: ProfileSource.LOCAL,
      subject: ['eng', 'maths'],
      syllabus: ["1oth"],
      gradeValue: {}
    };

    this.profileService.createProfile(req, ProfileSource.LOCAL).toPromise().then((res: any) => {
      console.log('CreatedProfile?--', res);
    }).catch((err: any) => {
      console.log('err', err);
    })
  }

  deleteProfileWithUID() {
    let uid = prompt('user id');
    this.profileService.deleteProfile(uid).toPromise().then((result: any) => {
      console.log('successfully deleted.', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  getAllProfiles() {
    const request: GetAllProfileRequest = {
      local: JSON.parse(prompt('local? true or false')),
      server: JSON.parse(prompt('server? true or false')),
      groupId: prompt('groupID')
    };

    this.profileService.getAllProfiles(request).toPromise().then((success: any) => {
      console.log('successfully got all profiles', success)
    }).catch((error: any) => {
      console.log('error while getting all profiles', error);
    })
  }

  getCurrentProfile() {
    this.profileService.getActiveSessionProfile().toPromise().then((result: any) => {
      console.log('getCurrentProfile', result);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }

  setCurrentProfile() {
    const uid = prompt('Enter profileID');
    this.profileService.setActiveSessionForProfile(uid).subscribe(success => {
      console.log('success in setting current profile--', success);
    }, error => {
      console.log('error in setting current profile--', error);
    })
  }

  updateProfile() {
    const req: Profile = {
      uid: '7149d27d-c80e-4a8d-ad9c-4c24f8149a7d',
      handle: 'shubranil',
      createdAt: Date.now(),
      source: ProfileSource.LOCAL,
      board: [''],
      profileType: ProfileType.TEACHER,
      syllabus: [''],
      grade: [''],
      subject: [''],
      medium: ['English'],
      gradeValue: {}
    };
    this.profileService.updateProfile(req).subscribe(sucess => {
      console.log('Successfully updated Profile-- ', sucess)
    }, error => {
      console.log('error while updating profile-- ', error);
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

  acceptTermsConditions() {
    const request: AcceptTermsConditionRequest = {
      version: 'v1'
    };
    this.profileService.acceptTermsAndConditions(request).subscribe(success => {
      console.log('successfully hit api', success)
    }, error => {
      console.log('could not successfully hit api', error);
    })
  }

  isProfileAlreadyInUse() {
    const request: IsProfileAlreadyInUseRequest = {
      key: '9019720923',
      type: 'phone'
    };
    this.profileService.isProfileAlreadyInUse(request).subscribe((success) => {
      console.log('isProfileAlreadyInUse--', success.response);
    }, error => {
      console.log('error in isProfileAlreadyInUse--', error);
    });
  }

  generateOtp() {
    const request: GenerateOtpRequest = {
      key: 'subranil.saha@gmail.com',
      type: 'email'
    };
    this.profileService.generateOTP(request).subscribe((success) => {
      console.log('generateOTP-- ', success)
    }, error => {
      console.log('error in generating OTP', error);
    });
  }

  verifyOtp() {
    const request: VerifyOtpRequest = {
      key: 'subranil.saha@gmail.com',
      type: 'email',
      otp: '625312'
    };
    this.profileService.verifyOTP(request).subscribe((success) => {
      console.log('Successfully verified OTP--', success);
    }, error => {
      console.log('Error in Verify OTP--', error);
    });
  }

  // searchLocation() {
  //   const request: LocationSearchCriteria = {
  //     type: 'state',
  //   };
  //   this.profileService.searchLocation(request).subscribe((success) => {
  //     console.log('Successfully searched location--', success);
  //   }, error => {
  //     console.log('error in searching location --', error)
  //   });
  // }
}
