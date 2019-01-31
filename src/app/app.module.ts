import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule, Provider} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, Platform} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SunbirdSdk} from 'sunbird-sdk';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';

export const sunbirdSdkServicesProvidersFactory: () => Provider[] = () => {
  return [{
    provide: 'COURSE_SERVICE',
    useFactory: () => SunbirdSdk.instance.courseService
  }, {
    provide: 'SHARED_PREFERENCES',
    useFactory: () => SunbirdSdk.instance.sharedPreferences
  }, {
    provide: 'API_SERVICE',
    useFactory: () => SunbirdSdk.instance.apiService
  }];
};

export const sunbirdSdkFactory: (uniqueDeviceID: UniqueDeviceID, platform: Platform) => () => Promise<void> =
  (uniqueDeviceID: UniqueDeviceID, platform: Platform) => {
    return async () => {
      let deviceId = '';

      if (platform.is('core') || platform.is('mobileweb')) {
        deviceId = '451a26e2-98b4-55d0-3554-630618743698';
      } else {
        deviceId = await uniqueDeviceID.get();
      }

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
        dbConfig: {
          dbName: 'GenieServices.db'
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
    UniqueDeviceID,
    ...sunbirdSdkServicesProvidersFactory(),
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_INITIALIZER, useFactory: sunbirdSdkFactory, deps: [UniqueDeviceID, Platform], multi: true}
  ]
})
export class AppModule {
}
