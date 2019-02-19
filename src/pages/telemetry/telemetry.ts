import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ImpressionType, ImpressionSubtype, PageId, Environment, GenerateImpressionTelemetryAfterMethod,
  GenerateImpressionTelemetryBeforeMethod, GenerateImpressionTelemetryAfterMethodResolves} from 'sunbird-sdk';
import {GenerateInteractTelemetryAfterMethod,
        InteractType, InteractSubtype,
        GenerateInteractTelemetryBeforeMethod, 
        GenerateInteractTelemetryAfterMethodResolves,
        GenerateInteractTelemetryAfterMethodRejects,
        GenerateErrorTelemetryAfterMethodThrows} from 'sunbird-sdk';

import {LogLevel, LogType, GenerateLogTelemetryBeforeMethod, GenerateLogTelemetryAfterMethodResolves} from 'sunbird-sdk';  
import {Mode, GenerateStartTelemetryAfterMethod, GenerateStartTelemetryAfterMethodResolves, GenerateStartTelemetryBeforeMethod} from 'sunbird-sdk';

/**
 * Generated class for the TelemetryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-telemetry',
  templateUrl: 'telemetry.html',
})
export class TelemetryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelemetryPage');
  }
  @GenerateImpressionTelemetryAfterMethod({
    impressionType: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY
  })
  impressionTelemetryAfter(){
   
  }
  @GenerateImpressionTelemetryBeforeMethod({
    impressionType: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY
  })
  impressionTelemetryBefore(){
  
  }
  @GenerateImpressionTelemetryAfterMethodResolves({
    impressionType: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY
  })
  impressionTelemetryAfterMethodResolves(arg: string){
    return new Promise((resolve) => {
      console.log('impression after resolve ' + arg);
      resolve();
  });
  }

  @GenerateInteractTelemetryAfterMethod({
    interactType: InteractType.TOUCH,
        subType: InteractSubtype.CONTINUE_CLICKED,
        env: Environment.LIBRARY,
        pageId: PageId.LIBRARY
  })
  interactTelemetryAfter(){}
  @GenerateInteractTelemetryBeforeMethod({
    interactType: InteractType.TOUCH,
        subType: InteractSubtype.CONTINUE_CLICKED,
        env: Environment.LIBRARY,
        pageId: PageId.LIBRARY
  })
  interactTelemetryBefore(){}

  @GenerateInteractTelemetryAfterMethodResolves({
    interactType: InteractType.TOUCH,
    subType: InteractSubtype.CONTINUE_CLICKED,
    env: Environment.LIBRARY,
    pageId: PageId.LIBRARY
  })
  interactTelemetryAfterResolves(arg: string){
    return new Promise((resolve) => {
      console.log('interact after resolve ' + arg);
      resolve();
  });
  }

  @GenerateInteractTelemetryAfterMethodRejects({
    interactType: InteractType.TOUCH,
    subType: InteractSubtype.CONTINUE_CLICKED,
    env: Environment.LIBRARY,
    pageId: PageId.LIBRARY
  })
  interactTelemetryAfterRejects(arg: string){
    return new Promise((resolve, reject) => {
      console.log('interact after reject ', arg);
      reject();
  });
  }
  @GenerateLogTelemetryBeforeMethod({
    logLevel: LogLevel.TRACE,
    message: '',
    env: Environment.LIBRARY,
    type: LogType.NOTIFICATION,
    params: []
  })
  logTelemetryBefore(){}

  @GenerateLogTelemetryAfterMethodResolves({
    logLevel: LogLevel.TRACE,
    message: '',
    env: Environment.LIBRARY,
    type: LogType.NOTIFICATION,
    params: []
  })
  logTelemetryAfter(arg: string){
    return new Promise((resolve) => {
      console.log('log after resolve', arg);
      resolve();
    });
  }

  @GenerateStartTelemetryAfterMethod({
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY,
    mode: Mode.PLAY
  })
  startTelemetryAfter(){}

  @GenerateStartTelemetryBeforeMethod({
    pageId: PageId.LIBRARY,
    env: Environment.LIBRARY,
    mode: Mode.PLAY
  })
  GenerateStartTelemetryBeforeMethod(){}

@GenerateStartTelemetryAfterMethodResolves({
  pageId: PageId.LIBRARY,
    env: Environment.LIBRARY,
    mode: Mode.PLAY
})
  startTelemetryAfterResolves(arg){
    return new Promise((resolve) => {
      console.log('start after resolve', arg);
      resolve();
    });
  }
@GenerateErrorTelemetryAfterMethodThrows({
  interactType: InteractType.TOUCH,
  subType: InteractSubtype.CONTINUE_CLICKED,
  env: Environment.LIBRARY,
  pageId: PageId.LIBRARY
})
  errorTelemetryAfter(arg: string){
    return new Promise((resolve, reject) => {
      console.log('error message', arg);
      reject();
    })
  }
}


