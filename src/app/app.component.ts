import {Component, Inject} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import {ApiService, HttpRequestType, Request} from 'sunbird-sdk';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    @Inject('API_SERVICE') private apiService: ApiService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    setTimeout(() => {
      this.testApiCall();
    }, 2000);
  }


  private async testApiCall() {
    const r = await this.apiService.fetch(
      new Request.Builder()
        .withType(HttpRequestType.POST)
        .withPath('/data/v1/page/assemble')
        .withBody([])
        .withHeaders({})
        .build()
    ).toPromise();

    console.log(r);
  }
}

