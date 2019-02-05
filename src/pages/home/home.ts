import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {DbPage} from '../db/db';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  goToDbPage() {
    this.navCtrl.push(DbPage);
  }
}
