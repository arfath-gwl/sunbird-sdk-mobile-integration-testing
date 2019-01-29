import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule, Provider} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SunbirdSdk} from 'sunbird-sdk';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

export class SunbirdSdkInjectionTokens {
  public static CONTENT_SERVICE = Symbol('CONTENT_SERVICE');
  public static COURSE_SERVICE = Symbol('COURSE_SERVICE');
}

export const sunbirdSdkServicesProvidersFactory: () => Provider[] = () => {
  return [{
    provide: SunbirdSdkInjectionTokens.CONTENT_SERVICE,
    useValue: SunbirdSdk.instance.contentService
  }, {
    provide: SunbirdSdkInjectionTokens.COURSE_SERVICE,
    useValue: SunbirdSdk.instance.courseService
  }];
};

export const sunbirdSdkFactory: (uniqueDeviceID: UniqueDeviceID) => Promise<void> =
  async (uniqueDeviceID: UniqueDeviceID) => {
    const deviceId = await uniqueDeviceID.get();

    SunbirdSdk.instance.init({
      apiConfig: {
        baseUrl: 'https://dev.sunbirded.org',
        user_authentication: {
          redirectUrl: 'org.sunbird.app.dev://mobile',
          logoutUrl: '',
          authUrl: ''
        },
        api_authentication: {
          mobileAppKey: 'sunbird - 0.1',
          mobileAppSecret: 'd0299ce55a6440eb968b46f355e22504',
          mobileAppConsumer: 'mobile_device',
          channelId: 'b00bc992ef25f1a9a8d63291e20efc8d',
          producerId: 'dev.sunbird.app',
          deviceId: deviceId
        },
        cached_requests: {
          timeToLive: 2000
        }
      },
      dbContext: {
        getDBName: () => 'GenieServices.db',
        getDBVersion: () => 16,
        getAppMigrationList: () => []
      },
      contentServiceConfig: {
        apiPath: ''
      },
      courseServiceConfig: {
        apiPath: ''
      },
      formServiceConfig: {
        apiPath: '',
        formFilePath: ''
      },
      frameworkServiceConfig: {
        apiPath: '',
        frameworkConfigFilePaths: [],
        channelConfigFilePath: ''
      },
      profileServiceConfig: {
        apiPath: '',
        searchProfilePath: ''
      },
      pageServiceConfig: {
        apiPath: '',
        filePath: ''
      }
    });
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_INITIALIZER, useFactory: sunbirdSdkFactory, deps: [UniqueDeviceID], multi: true}
  ]
})
export class AppModule {
}
