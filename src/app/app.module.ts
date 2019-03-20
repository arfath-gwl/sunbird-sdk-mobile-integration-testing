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
import {SunbirdSdkConfig} from '../environment/sunbird-sdk-config';
import {PermissionsPage} from '../pages/permissions/permissions';

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
  }, {
    provide: 'EVENTS_BUS_SERVICE',
    useFactory: () => SunbirdSdk.instance.eventsBusService
  }, {
    provide: 'ANDROID_PERMISSIONS_SERVICE',
    useFactory: () => SunbirdSdk.instance.androidPermissionsService
  }];
};

export const sunbirdSdkFactory = () => {
    return async () => {
      await SunbirdSdk.instance.init(SunbirdSdkConfig);
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
    DownloadPage,
    PermissionsPage
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
    DownloadPage,
    PermissionsPage
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
