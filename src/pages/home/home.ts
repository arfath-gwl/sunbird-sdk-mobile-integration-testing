import {Component, Inject} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from "../profile/profile";
import {DbPage} from '../db/db';
import {ApiPage} from '../api/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService, SessionProvider} from 'sunbird-sdk';


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
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiI4NDBkMTczMi05ZWMzLTQxYmUtOWM2Ni04OGZkNTk5NTkwMzQiLCJleHAiOjE1NDk0ODQ4OTAsIm5iZiI6MCwiaWF0IjoxNTQ5NDQxNjkwLCJpc3MiOiJodHRwczovL3N0YWdpbmcub3Blbi1zdW5iaXJkLm9yZy9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiZWZhYzlkMjUtOWNkZi00MjIyLTgxNTMtOTMwNDY2YWEwY2VmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYWRtaW4tY2xpIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMzdkMDRkNDctZTRjOS00MTRlLTkxYWItYzAzODlhYWVmOWFkIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6W10sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7fSwibmFtZSI6IkNyZXRhdGlvbiBxd3ciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJudHB0ZXN0MTIiLCJnaXZlbl9uYW1lIjoiQ3JldGF0aW9uIiwiZmFtaWx5X25hbWUiOiJxd3ciLCJlbWFpbCI6InVzZXJ0ZXN0MTJAdGVzdHNzLmNvbSJ9.D-d0M8dZIA2P19-6JsmWS1pAs0a0aILmP7gPfMwy_s5Tn2vJi4IokwiHNuLCoVyNpqHxyTU96QD4U13j0T5F8yrvMBe3gpB682c1PTHlVlk72ynkJldR1_Wxci35qbJFc6VR5-VVlhVgrwMaoR5mmxUuovJnuGIuCAFXALFDr-karS8Lj-a1fbTrZSG137acCRTWm1cu8yt6dX-zoYif-PE7vvbRC6JHZlxwF_XMUbXz3-zud_VJm-C_j1jqkdWnsu4ixuyDSO8FnST44Op1OuGNyWbU1I2euFWZdTTdEc9aK2UJdjqKODbKQryrrkGpre9ZuaMikhJ58M5F70Yq8A",
      "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ1WXhXdE4tZzRfMld5MG5PS1ZoaE5hU0gtM2lSSjdXU25ibFlwVVU0TFRrIn0.eyJqdGkiOiJmNTU4ZGRmNy1hZjNiLTQ3ZjktYmNiMC0xNmYzMjI3M2VjNjgiLCJleHAiOjE1NDk1MjgwOTAsIm5iZiI6MCwiaWF0IjoxNTQ5NDQxNjkwLCJpc3MiOiJodHRwczovL3N0YWdpbmcub3Blbi1zdW5iaXJkLm9yZy9hdXRoL3JlYWxtcy9zdW5iaXJkIiwiYXVkIjoiYWRtaW4tY2xpIiwic3ViIjoiZWZhYzlkMjUtOWNkZi00MjIyLTgxNTMtOTMwNDY2YWEwY2VmIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImFkbWluLWNsaSIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjM3ZDA0ZDQ3LWU0YzktNDE0ZS05MWFiLWMwMzg5YWFlZjlhZCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7fX0.fwiTfOUoJQUBaYHNWA26j561nefTiiyI51HhATnDCucTMm2Q1FAuHAb3HDDBtr04pS4928PTuJhHNHjOhzV0lPSbf5BHhRYGhiYyn1df7xyrRliTFu03qvd65H7c1m_Nb81oEnHiFezqI_d_GCvdFdiTzC6E8pDPk_188Hs47Sq-3guSuGdVcwradhMMFXRrgQun4z52oR8lOt1OTuvkvf3g18_HmwL_2eje2lscB9SNc0eK7RIn2YbDzV8QbBvnTboOOGOeeE6i_kshBpZAxKlPKmBFaeWbjTOS7fS2QMzA6-Gqeym5DnhLDk7JWdHxbPqlhXfu_O4vLdLiTEBYQw",
      "token_type": "bearer",
      "not-before-policy": 0,
      "session_state": "37d04d47-e4c9-414e-91ab-c0389aaef9ad"
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
