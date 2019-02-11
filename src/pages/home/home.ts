import { Component, Inject } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpRequestType, Request, PageAssembleService, PageName, PageAssembleCriteria,
  ApiService, AuthService, OAuthSessionProvider, SdkConfig, SessionProvider} from 'sunbird-sdk';
import {ProfilePage} from "../profile/profile";
import { FrameworkPage } from '../framework/framework';
import {DbPage} from '../db/db';
import {ApiPage} from '../api/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import GroupPage from '../group/group';
import {CoursePage} from "../course/course";
import axios, {AxiosStatic} from 'axios';
import qs from 'qs';
import { PageServicePage } from '../page-service/page-service';

declare const escape;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              @Inject('API_SERVICE') private apiService: ApiService,
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
  callPageApi(){
    console.log('callPageApi called');
    const criteria: PageAssembleCriteria = {
      name: PageName.COURSE,
      source: 'web',
      filters: {},
      mode: 'soft'
    };
  };

  onOAuthLoginClick() {
    this.authService.setSession(new OAuthSessionProvider(this.sdkConfig.apiConfig, this.apiService))
      .mergeMap(() => this.authService.getSession())
      .subscribe((v) => {
        console.log(v);
      });
  }

  goToProfilePage() {
    this.navCtrl.push(ProfilePage).then((success: any) => {
    }).catch((error: any) => {
    })
  }
  goToFrameworkPage() {
    this.navCtrl.push(FrameworkPage);
  }

  goToDbPage() {
    this.navCtrl.push(DbPage);
  }

  goToApiPage() {
    this.navCtrl.push(ApiPage);
  }

  goTOgroupPage() {
    this.navCtrl.push(GroupPage);
  }
  goToCoursePage(){
    this.navCtrl.push(CoursePage);
  }
  goTOPageservicePage(){
    this.navCtrl.push(PageServicePage);
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
