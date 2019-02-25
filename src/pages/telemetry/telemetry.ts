import {Component, Inject} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {
  Environment,
  GenerateErrorTelemetryAfterMethodThrows,
  GenerateImpressionTelemetryAfterMethod,
  GenerateImpressionTelemetryAfterMethodResolves,
  GenerateImpressionTelemetryBeforeMethod,
  GenerateInteractTelemetryAfterMethod,
  GenerateInteractTelemetryAfterMethodRejects,
  GenerateInteractTelemetryAfterMethodResolves,
  GenerateInteractTelemetryBeforeMethod,
  GenerateLogTelemetryAfterMethodResolves,
  GenerateLogTelemetryBeforeMethod,
  GenerateStartTelemetryAfterMethod,
  GenerateStartTelemetryAfterMethodResolves,
  GenerateStartTelemetryBeforeMethod,
  ImpressionSubtype,
  ImpressionType,
  InteractSubtype,
  InteractType,
  LogLevel,
  LogType,
  PageId,
  TelemetryService
} from 'sunbird-sdk';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('TELEMETRY_SERVICE') private telemetryService: TelemetryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelemetryPage');
  }
  @GenerateImpressionTelemetryAfterMethod({
    type: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LOGIN,
    uri: '',
    visits: [],
    env: Environment.COURSE,
    objId: '',
    objType: '',
    objVer: '',
    correlationData: []
  })
  impressionTelemetryAfter(){
   
  }
  @GenerateImpressionTelemetryBeforeMethod({
    type: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LOGIN,
    uri: '',
    visits: [],
    env: Environment.COURSE,
    objId: '',
    objType: '',
    objVer: '',
    correlationData: []
  })
  impressionTelemetryBefore(){
  
  }
  @GenerateImpressionTelemetryAfterMethodResolves({
    type: ImpressionType.LIST,
    subType: ImpressionSubtype.RATING_POPUP,
    pageId: PageId.LOGIN,
    uri: '',
    visits: [],
    env: Environment.COURSE,
    objId: '',
    objType: '',
    objVer: '',
    correlationData: []
  })
  impressionTelemetryAfterMethodResolves(arg: string){
    return new Promise((resolve) => {
      console.log('impression after resolve ' + arg);
      resolve();
  });
  }

  @GenerateInteractTelemetryAfterMethod({
    type: InteractType.TOUCH,
    subType: InteractSubtype.LOGOUT_SUCCESS,
    id: '',
    pageId: PageId.LOGIN,
    pos: [{}],
    values: [],
    env: Environment.COURSE,
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    valueMap: {
        
    },
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfter(){}
  @GenerateInteractTelemetryBeforeMethod({
    type: InteractType.TOUCH,
    subType: InteractSubtype.LOGOUT_SUCCESS,
    id: '',
    pageId: PageId.LOGIN,
    pos: [{}],
    values: [],
    env: Environment.COURSE,
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    valueMap: {
        
    },
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryBefore(){}

  @GenerateInteractTelemetryAfterMethodResolves({
    type: InteractType.TOUCH,
    subType: InteractSubtype.LOGOUT_SUCCESS,
    id: '',
    pageId: PageId.LOGIN,
    pos: [{}],
    values: [],
    env: Environment.COURSE,
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    valueMap: {
        
    },
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfterResolves(arg: string){
    return new Promise((resolve) => {
      console.log('interact after resolve ' + arg);
      resolve();
  });
  }

  @GenerateInteractTelemetryAfterMethodRejects({
    type: InteractType.TOUCH,
    subType: InteractSubtype.LOGOUT_SUCCESS,
    id: '',
    pageId: PageId.LOGIN,
    pos: [{}],
    values: [],
    env: Environment.COURSE,
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    valueMap: {
        
    },
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfterRejects(arg: string){
    return new Promise((resolve, reject) => {
      console.log('interact after reject ', arg);
      reject();
  });
  }
  @GenerateLogTelemetryBeforeMethod({
    type: LogType.NOTIFICATION,
    level: LogLevel.DEBUG,
    message: '',
    pageId: PageId.LOGIN,
    params: [],
    env: Environment.COURSE,
    actorType: ''
  })
  logTelemetryBefore(){}

  @GenerateLogTelemetryAfterMethodResolves({
    type: LogType.NOTIFICATION,
    level: LogLevel.DEBUG,
    message: '',
    pageId: PageId.LOGIN,
    params: [],
    env: Environment.COURSE,
    actorType: ''
  })
  logTelemetryAfter(arg: string){
    return new Promise((resolve) => {
      console.log('log after resolve', arg);
      resolve();
    });
  }

  @GenerateStartTelemetryAfterMethod({
    type: '',
    deviceSpecification: {
      os : '',
      make : '',
      id : '',
      mem : -1.0,
      idisk : -1.0,
      edisk : -1.0,
      scrn : -1.0,
      camera: '',
      cpu : '',
      sims : -1,
      cap:  []
    },
    loc: '',
    mode: '',
    duration: 1,
    pageId: PageId.LOGIN,
    env: Environment.COURSE,
    objId: '',
    objType: '',
    objVer: '',
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    correlationData: []
  })
  startTelemetryAfter(){}

  @GenerateStartTelemetryBeforeMethod({
    type: '',
    deviceSpecification: {
      os : '',
      make : '',
      id : '',
      mem : -1.0,
      idisk : -1.0,
      edisk : -1.0,
      scrn : -1.0,
      camera: '',
      cpu : '',
      sims : -1,
      cap:  []
    },
    loc: '',
    mode: '',
    duration: 1,
    pageId: PageId.LOGIN,
    env: Environment.COURSE,
    objId: '',
    objType: '',
    objVer: '',
    rollup: {
      l1: '',
      l2: '',
      l3: '',
      l4: ''
    },
    correlationData: []
  })
  GenerateStartTelemetryBeforeMethod(){}

@GenerateStartTelemetryAfterMethodResolves({
  type: '',
  deviceSpecification: {
    os : '',
    make : '',
    id : '',
    mem : -1.0,
    idisk : -1.0,
    edisk : -1.0,
    scrn : -1.0,
    camera: '',
    cpu : '',
    sims : -1,
    cap:  []
  },
  loc: '',
  mode: '',
  duration: 1,
  pageId: PageId.LOGIN,
  env: Environment.COURSE,
  objId: '',
  objType: '',
  objVer: '',
  rollup: {
    l1: '',
    l2: '',
    l3: '',
    l4: ''
  },
  correlationData: []
})
  startTelemetryAfterResolves(arg){
    return new Promise((resolve) => {
      console.log('start after resolve', arg);
      resolve();
    });
  }
@GenerateErrorTelemetryAfterMethodThrows({
  errorCode: '',
  errorType: '',
  stacktrace: '',
  pageId: PageId.LOGIN,
  env: Environment.COURSE
})
  errorTelemetryAfter(arg: string){
    return new Promise((resolve, reject) => {
      console.log('error message', arg);
      reject();
    })
  }

  onSync() {
    this.telemetryService.sync().subscribe((val) => {
      console.log(val);
    }, err => {
      console.log(err);
    }, () => {
      console.log('complete')
    });
  }
}


