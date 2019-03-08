import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ErrorHandler, NgModule, Provider} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {SunbirdSdk} from 'sunbird-sdk';
import {UniqueDeviceID} from '@ionic-native/unique-device-id';
import {ProfilePage} from '../pages/profile/profile';
import {FrameworkPage} from '../pages/framework/framework';
import {DbPage} from '../pages/db/db';
import {ApiPage} from '../pages/api/api';
import {ReactiveFormsModule} from '@angular/forms';
import GroupPage from '../pages/group/group';
import {File} from '@ionic-native/file';
import {CoursePage} from "../pages/course/course";
import {PageServicePage} from '../pages/page-service/page-service';
import {FormPage} from '../pages/form/form';
import {TelemetryPage} from '../pages/telemetry/telemetry';
import {ContentPage} from "../pages/content/content";
import {DownloadPage} from '../pages/download/download';

export const sunbirdSdkServicesProvidersFactory: () => Provider[] = () => {
  return [{
    provide: 'SDK_CONFIG',
    useFactory: () => SunbirdSdk.instance.authService
  }, {
    provide: 'AUTH_SERVICE',
    useFactory: () => SunbirdSdk.instance.authService
  }, {
    provide: 'DB_SERVICE',
    useFactory: () => SunbirdSdk.instance.dbService
  }, {
    provide: 'COURSE_SERVICE',
    useFactory: () => SunbirdSdk.instance.courseService
  }, {
    provide: 'SHARED_PREFERENCES',
    useFactory: () => SunbirdSdk.instance.sharedPreferences
  }, {
    provide: 'API_SERVICE',
    useFactory: () => SunbirdSdk.instance.apiService
  }, {
    provide: 'PAGE_ASSEMBLE_SERVICE',
    useFactory: () => SunbirdSdk.instance.pageAssembleService
  }, {
    provide: 'GROUP_SERVICE',
    useFactory: () => SunbirdSdk.instance.groupService
  }, {
    provide: 'PROFILE_SERVICE',
    useFactory: () => SunbirdSdk.instance.profileService
  }, {
    provide: 'DB_SERVICE',
    useFactory: () => SunbirdSdk.instance.dbService
  }, {
    provide: 'FRAMEWORK_SERVICE',
    useFactory: () => SunbirdSdk.instance.frameworkService
  }, {
    provide: 'PAGE_ASSEMBLE_SERVICE',
    useFactory: () => SunbirdSdk.instance.pageAssembleService
  }, {
    provide: 'FORM_SERVICE',
    useFactory: () => SunbirdSdk.instance.formService
  }, {
    provide: 'SYSTEM_SETTINGS_SERVICE',
    useFactory: () => SunbirdSdk.instance.systemSettingsService
  }, {
    provide: 'CONTENT_SERVICE',
    useFactory: () => SunbirdSdk.instance.contentService
  }, {
    provide: 'CONTENT_FEEDBACK_SERVICE',
    useFactory: () => SunbirdSdk.instance.contentFeedbackService
  },{
    provide: 'TELEMETRY_SERVICE',
    useFactory: () => SunbirdSdk.instance.telemetryService
  }, {
    provide: 'DOWNLOAD_SERVICE',
    useFactory: () => SunbirdSdk.instance.downloadService
  }];
};

export const sunbirdSdkFactory = () => {
    return async () => {
      await SunbirdSdk.instance.init({
        fileConfig: {
          debugMode: true
        },
        apiConfig: {
          debugMode: true,
          host: 'https://staging.ntp.net.in',
          baseUrl: 'https://staging.ntp.net.in/api',
          user_authentication: {
            redirectUrl: 'staging.diksha.app://mobile',
            authUrl: '/auth/realms/sunbird/protocol/openid-connect',
          },
          api_authentication: {
            mobileAppKey: 'sunbird-0.1',
            mobileAppSecret: 'eab91d5404434800b81996c1cd699d19',
            mobileAppConsumer: 'mobile_device',
            channelId: '505c7c48ac6dc1edc9b08f21db5a571d',
            producerId: 'staging.diksha.app',
            producerUniqueId: 'sunbird.app'
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
          apiPath: '/api/content/v1',
          searchApiPath: ''
        },
        courseServiceConfig: {
          apiPath: '/api/course/v1'
        },
        formServiceConfig: {
          apiPath: '/api/data/v1/form',
          formConfigDirPath: '/data/form',
        },
        frameworkServiceConfig: {
          channelApiPath: '/api/channel/v1',
          frameworkApiPath: '/api/framework/v1',
          searchOrganizationApiPath: '/api/org/v1',
          frameworkConfigDirPath: '/data/framework',
          channelConfigDirPath: '/data/channel',
          systemSettingsDefaultChannelIdKey: 'custodianOrgId'
        },
        profileServiceConfig: {
          profileApiPath: '/api/user/v1',
          tenantApiPath: '/v1/tenant',
          otpApiPath: '/api/otp/v1',
          searchLocationApiPath: '/api/data/v1'
        },
        pageServiceConfig: {
          apiPath: '/api/data/v1',
        },
        appConfig: {
          maxCompatibilityLevel: 100,
          minCompatibilityLevel: 0
        },
        systemSettingsConfig: {
          systemSettingsApiPath: '/api/data/v1',
          systemSettingsDirPath: '/data/system',
        },
        sharedPreferencesConfig: {
          debugMode: true
        },
        telemetryConfig: {
          deviceRegisterHost: 'https://api.diksha.gov.in',
          deviceRegisterApiPath: '',
          telemetryApiPath: '/api/data/v1',
          telemetrySyncBandwidth: 2,
          telemetrySyncThreshold: 2,
        }
      });
    };
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    FrameworkPage,
    DbPage,
    ApiPage,
    GroupPage,
    ApiPage,
    CoursePage,
    PageServicePage,
    FormPage,
    TelemetryPage,
    ContentPage,
    DownloadPage
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    FrameworkPage,
    DbPage,
    ApiPage,
    GroupPage,
    ApiPage,
    CoursePage,
    PageServicePage,
    FormPage,
    TelemetryPage,
    ContentPage,
    DownloadPage
  ],
  providers: [
    File,
    StatusBar,
    SplashScreen,
    UniqueDeviceID,
    ...sunbirdSdkServicesProvidersFactory(),
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: APP_INITIALIZER, useFactory: sunbirdSdkFactory, multi: true}

  ]
})
export class AppModule {
}
