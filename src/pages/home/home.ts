import {Component, Inject, NgZone} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {
  ApiService,
  AuthService,
  OauthSession,
  OAuthSessionProvider,
  ProfileService,
  SdkConfig,
  ServerProfile,
  SessionProvider
} from 'sunbird-sdk';
import {ProfilePage} from "../profile/profile";
import {FrameworkPage} from '../framework/framework';
import {DbPage} from '../db/db';
import {ApiPage} from '../api/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import GroupPage from '../group/group';
import {CoursePage} from "../course/course";
import axios, {AxiosStatic} from 'axios';
import qs from 'qs';
import {PageServicePage} from '../page-service/page-service';
import {FormPage} from "../form/form";
import {Observable, Subject} from 'rxjs';
import {ContentPage} from "../content/content";
import {TelemetryPage} from "../telemetry/telemetry";

declare const escape;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loggedInUser$: Subject<ServerProfile | undefined>;
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              private ngZone: NgZone,
              private platform: Platform,
              @Inject('PROFILE_SERVICE') private profileService: ProfileService,
              @Inject('API_SERVICE') private apiService: ApiService,
              @Inject('SDK_CONFIG') private sdkConfig: SdkConfig,
              @Inject('AUTH_SERVICE') private authService: AuthService) {
    this.loginForm = new FormGroup({
      'client_id': new FormControl('admin-cli'),
      'grant_type': new FormControl('password'),
      'username': new FormControl('ntptest12', Validators.required),
      'password': new FormControl('password', Validators.required)
    });

    this.loggedInUser$ = new Subject<ServerProfile | undefined>();
  }

  ionViewWillLoad() {
    this.fetchLoggedInUser();
  }

  ionViewWillEnter() {
    this.fetchLoggedInUser();
  }

  onLoginFormSubmit() {
    this.authService.setSession(new DebugSessionProvider(this.loginForm.value, this.sdkConfig.apiConfig.host))
      .mergeMap(() => this.authService.getSession())
      .subscribe((v) => {
        this.fetchLoggedInUser();
      });
  }

  goToFormPage() {
    this.navCtrl.push(FormPage);
  }

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

  goToCoursePage() {
    this.navCtrl.push(CoursePage);
  }

  goTOPageservicePage() {
    this.navCtrl.push(PageServicePage);
  }

  doLogout() {
    if (this.platform.is('core') || this.platform.is('mobileweb')) {
      localStorage.clear();
      this.fetchLoggedInUser();
      return;
    }

    this.authService.resignSession()
      .subscribe(() => {
        this.fetchLoggedInUser();
      });
  }
  goToContentPage(){
    this.navCtrl.push(ContentPage);
  }
  gotToTelemetryPage(){
    this.navCtrl.push(TelemetryPage);
  }

  private fetchLoggedInUser() {
    this.authService.getSession()
      .mergeMap((session: OauthSession | undefined) => {
        if (!session) {
          return Observable.of(undefined);
        }

        return this.profileService
          .getServerProfilesDetails({userId: session.userToken, requiredFields: []})
      })
      .subscribe((profile) => {
        this.ngZone.run(() => {
          this.loggedInUser$.next(profile);
        });
      });
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
