import {Component, Inject} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {DbPage} from '../db/db';
import {ApiPage} from '../api/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, SdkConfig, SessionProvider} from 'sunbird-sdk';
import GroupPage from '../group/group';
import axios, {AxiosStatic} from 'axios';
import qs from 'qs';
import { CoursePage } from '../course/course';

declare const escape;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              @Inject('SDK_CONFIG') private sdkConfig: SdkConfig,
              @Inject('AUTH_SERVICE') private authService: AuthService) {
    this.loginForm = new FormGroup({
      'client_id': new FormControl('admin-cli'),
      'grant_type': new FormControl('password'),
      'username': new FormControl('ntptest12', Validators.required),
      'password': new FormControl('password', Validators.required)
    })
  }

  onLoginFormSubmit() {
    this.authService.setSession(new DebugSessionProvider(this.loginForm.value, this.sdkConfig.apiConfig.host))
      .mergeMap(() => this.authService.getSession())
      .subscribe((v) => {
        console.log(v);
      });
  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage);
  }

  goToDbPage() {
    this.navCtrl.push(DbPage);
  }

  goToApiPage() {
    this.navCtrl.push(ApiPage);
  }

  goTOgroupPage(){
    this.navCtrl.push(GroupPage);
  }
  goTOCoursePage(){
    this.navCtrl.push(CoursePage);
  }
}

class DebugSessionProvider implements SessionProvider {
  private static readonly LOGIN_PATH = '/auth/realms/sunbird/protocol/openid-connect/token';
  private axios: AxiosStatic;

  constructor(private formValue: any, private host: string) {
    this.axios = axios;
  }

  async provide() {
    const data = qs.stringify(this.formValue);
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    const response = await this.axios.post<{ access_token: string, refresh_token: string }>(this.host + DebugSessionProvider.LOGIN_PATH, data, {headers})
      .then((res) => res.data);

    const aT = response.access_token;
    let uid = aT.substring(aT.indexOf(".") + 1, aT.lastIndexOf("."));
    uid = decodeURIComponent(escape(atob(uid)));
    uid = JSON.parse(uid).sub;
    const rT = response.refresh_token;

    return {
      accessToken: aT,
      refreshToken: rT,
      userToken: uid
    }
  }


}
