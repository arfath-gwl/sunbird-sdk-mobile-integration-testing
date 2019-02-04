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
        deviceId = '4adce7fad56e02b7';
      } else {
        deviceId = await uniqueDeviceID.get();
      }

      SunbirdSdk.instance.init({
        apiConfig: {
          debugMode: true,
          baseUrl: 'https://staging.ntp.net.in/api',
          user_authentication: {
            redirectUrl: 'org.sunbird.app.dev://mobile',
            logoutUrl: '',
            authUrl: ''
          },
          api_authentication: {
            mobileAppKey: 'sunbird-0.1',
            mobileAppSecret: 'eab91d5404434800b81996c1cd699d19',
            mobileAppConsumer: 'mobile_device',
            channelId: '505c7c48ac6dc1edc9b08f21db5a571d',
            producerId: 'dev.sunbird.app',
            deviceId: deviceId
          },
          cached_requests: {
            timeToLive: 2000
          }
        },
        dbConfig: {
          debugMode: true,
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
        },
        appConfig: {
          maxCompatibilityLevel: 100,
          minCompatibilityLevel: 0
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
