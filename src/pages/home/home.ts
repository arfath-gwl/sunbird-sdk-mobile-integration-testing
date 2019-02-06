import {Component, Inject} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {DbPage} from '../db/db';
import {ApiPage} from '../api/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, SessionProvider} from 'sunbird-sdk';

declare const escape;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginForm: FormGroup;

  constructor(public navCtrl: NavController,
              @Inject('AUTH_SERVICE') private authService: AuthService) {
    this.loginForm = new FormGroup({
      'client_id': new FormControl('admin-cli'),
      'grant_type': new FormControl('password'),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  onLoginFormSubmit() {
    this.authService.setSession(new DebugSessionProvider())
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
}

class DebugSessionProvider implements SessionProvider {
  constructor() {
  }

  async provide() {
    const response = {
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiJiN2JhNDljNS0zNzRkLTQ4ZGItYWYzNi1jMjQ4N2E5MzUxYjQiLCJleHAiOjE1NDk1MzA0OTYsIm5iZiI6MCwiaWF0IjoxNTQ5NDQ0MDk2LCJpc3MiOiJodHRwczovL3N0YWdpbmcubnRwLm5ldC5pbi9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiODQ0Mjg4N2MtYjAzYS00M2ZiLWE4NjItYjIyZDBiMGM0OTU2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiNWRiOThmZDktYjc2My00NDE0LWE5MDgtY2Q0OWViMjNmYjZmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7fSwibmFtZSI6ImNyZWF0ZXIgdXNlY2FzZSIsInByZWZlcnJlZF91c2VybmFtZSI6Im50cHRlc3QxMiIsImdpdmVuX25hbWUiOiJjcmVhdGVyIiwiZmFtaWx5X25hbWUiOiJ1c2VjYXNlIiwiZW1haWwiOiJ1c2VydGVzdDEyQHRlc3Rzcy5jb20ifQ.NjBKnLL5_HXOcEhJae9khNFTwAKC__S-1qe1piZ-shlCSMfAmKOJrN2dInfE3oHjRCtrDDYfgkJWJKfVCYdGQtqqoJSb--WIGQfhBK-rPTaGgq1_BkidI5jqWb2ID-4xduI_E2tMNnB9Or1yLyo3H1NoUp3cZTXyrbAu6qJ10Je5kDgsyaEKTVnHxfSkfGC5akz7nOegrWCKehn0yG_MPfhlhLrCKDnZkRAtQVvHA2DIdnGuyjpArLXuAotOwt0hu2iSHOlfNfiv68uhvCaJ-rllrZR0Y3ky-v5PiZQ31XKtnwSemjKPLXv2uwU-zIVysIzyOfmdCuaq1-672KMeZA",
      "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiI4ZDZkYjE3Mi00YzUwLTQ5OGUtYTVlMy01MzA4MjlhODdiNWIiLCJleHAiOjE1NDk1MzA0OTYsIm5iZiI6MCwiaWF0IjoxNTQ5NDQ0MDk2LCJpc3MiOiJodHRwczovL3N0YWdpbmcubnRwLm5ldC5pbi9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiODQ0Mjg4N2MtYjAzYS00M2ZiLWE4NjItYjIyZDBiMGM0OTU2IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImFkbWluLWNsaSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjVkYjk4ZmQ5LWI3NjMtNDQxNC1hOTA4LWNkNDllYjIzZmI2ZiIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7fX0.Gfv_HBURr1RUMuj0vCUMbTgqb4uRXYMN1i-d2c9l2_wPloesO_bxWyKfchyrDZh6Y492iTB91tLSBi6h03aLAAu9S0I_gLL9iYD2QX_sOftW8Tj8AozxVsQeqvIWBLmiDs-RMakJKj0sjwl9tYsiy7GODJEv-1r8-yyxEJgWKgwuuKGbEElC6L2t33wBrmImiEhVzdfDv8aIRQe5VZK0NOSQFd9Nq8xb19LlxSKtF71KLvB4FcFZpq_lU1QFoybtT4IosjW-C2Gfb7O2OIWRgi4FlPmDZ_30ccCFbX92ULlvAKy4Vb8u1Qo7wieiWtt55Uh4OzgbKQjXp_Ki9yGmDw",
    };

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
