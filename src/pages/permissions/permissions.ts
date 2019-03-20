import {Component, Inject} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AndroidPermission, AndroidPermissionsService} from 'sunbird-sdk';

/**
 * Generated class for the PermissionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html',
})
export class PermissionsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('ANDROID_PERMISSIONS_SERVICE') private androidPermissionsService: AndroidPermissionsService) {
  }

  ionViewDidLoad() {
  }

  public getPermissions() {
    this.androidPermissionsService.requestPermissions([AndroidPermission.CAMERA]).subscribe(status => {
      console.log(status);
    });
  }

  public hasPermission() {
    this.androidPermissionsService.checkPermissions([AndroidPermission.CAMERA, AndroidPermission.ACCESS_FINE_LOCATION]).subscribe(status => {
      console.log(status);
    });
  }

}
