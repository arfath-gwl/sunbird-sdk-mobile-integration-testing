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
  impressionTelemetryAfter() {

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
  impressionTelemetryBefore() {

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
  impressionTelemetryAfterMethodResolves(arg: string) {
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
    valueMap: {},
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfter() {
  }

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
    valueMap: {},
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryBefore() {
  }

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
    valueMap: {},
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfterResolves(arg: string) {
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
    valueMap: {},
    correlationData: [],
    objId: '',
    objType: '',
    objVer: ''
  })
  interactTelemetryAfterRejects(arg: string) {
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
  logTelemetryBefore() {
  }

  @GenerateLogTelemetryAfterMethodResolves({
    type: LogType.NOTIFICATION,
    level: LogLevel.DEBUG,
    message: '',
    pageId: PageId.LOGIN,
    params: [],
    env: Environment.COURSE,
    actorType: ''
  })
  logTelemetryAfter(arg: string) {
    return new Promise((resolve) => {
      console.log('log after resolve', arg);
      resolve();
    });
  }

  @GenerateStartTelemetryAfterMethod({
    type: '',
    deviceSpecification: {
      os: '',
      make: '',
      id: '',
      mem: -1.0,
      idisk: -1.0,
      edisk: -1.0,
      scrn: -1.0,
      camera: '',
      cpu: '',
      sims: -1,
      cap: []
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
  startTelemetryAfter() {
  }

  @GenerateStartTelemetryBeforeMethod({
    type: '',
    deviceSpecification: {
      os: '',
      make: '',
      id: '',
      mem: -1.0,
      idisk: -1.0,
      edisk: -1.0,
      scrn: -1.0,
      camera: '',
      cpu: '',
      sims: -1,
      cap: []
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
  GenerateStartTelemetryBeforeMethod() {
  }

  @GenerateStartTelemetryAfterMethodResolves({
    type: '',
    deviceSpecification: {
      os: '',
      make: '',
      id: '',
      mem: -1.0,
      idisk: -1.0,
      edisk: -1.0,
      scrn: -1.0,
      camera: '',
      cpu: '',
      sims: -1,
      cap: []
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
  startTelemetryAfterResolves(arg) {
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
  errorTelemetryAfter(arg: string) {
    return new Promise((resolve, reject) => {
      console.log('error message', arg);
      reject();
    })
  }

  telemetrySyncStat() {
    this.telemetryService.getTelemetryStat().subscribe((val) => {
      console.log(val);
    })
  }

  assessTelemetryForSummarizer() {
    this.telemetryService.saveTelemetry(
      '{"eid":"ASSESS","ets":1552717279439,"ver":"3.0","mid":"258d1b1b-5e89-4aa8-b9f7-9d3a49b69e42","actor":{"id":"5270e2b6-fbfe-41fe-920c-d4ad29791c5f","type":"User"},"context":{"channel":"505c7c48ac6dc1edc9b08f21db5a571d","pdata":{"id":"staging.diksha.app","ver":"2.0.localstaging-debug","pid":"sunbird.app.contentplayer"},"env":"contentplayer","sid":"3dca1987-08fe-4e14-96a3-b0abc924d039","did":"5a6e659672a015f6622af40dbd88407b91d7812e","cdata":[{"id":"offline","type":"PlayerLaunch"},{"id":"79679ec4db29f08d6d838cdb6e6fd5fe","type":"ContentSession"}],"rollup":{"l1":"do_30013062"}},"object":{"id":"do_30013062","type":"Content","ver":"2.0"},"tags":[],"edata":{"item":{"id":"ek.n.ib.a.ssnc.bp4.5","maxscore":1.0,"exlength":0.0,"params":[],"uri":"","title":"जोड़","mmc":[],"mc":[],"desc":""},"index":11.0,"pass":"Yes","score":1.0,"resvalues":[{"4":"true"}],"duration":116.0}}'
    ).subscribe((val) => {
      console.log(val)
    })
  }

  endTelemetryForSummarizer() {
    this.telemetryService.saveTelemetry(
      '{"eid":"END","ets":1552717362571,"ver":"3.0","mid":"33fe555e-07fe-4521-b535-9fc7153aeab5","actor":{"id":"5270e2b6-fbfe-41fe-920c-d4ad29791c5f","type":"User"},"context":{"channel":"505c7c48ac6dc1edc9b08f21db5a571d","pdata":{"id":"staging.diksha.app","ver":"2.0.localstaging-debug","pid":"sunbird.app.contentplayer"},"env":"contentplayer","sid":"3dca1987-08fe-4e14-96a3-b0abc924d039","did":"5a6e659672a015f6622af40dbd88407b91d7812e","cdata":[{"id":"offline","type":"PlayerLaunch"},{"id":"79679ec4db29f08d6d838cdb6e6fd5fe","type":"ContentSession"}],"rollup":{"l1":"do_30013062"}},"object":{"id":"do_30013062","type":"Content","ver":"2.0"},"tags":[],"edata":{"type":"content","mode":"play","pageid":"sunbird-player-Endpage","summary":[{"progress":100.0}],"duration":219.0}}'
    ).subscribe((val) => {
      console.log(val)
    })
  }

  startTelemetryForSummarizer() {
    this.telemetryService.saveTelemetry(
      '{"eid":"START","ets":1552717426594,"ver":"3.0","mid":"50d11635-d2da-48ee-a472-78ea44b06835","actor":{"id":"5270e2b6-fbfe-41fe-920c-d4ad29791c5f","type":"User"},"context":{"channel":"505c7c48ac6dc1edc9b08f21db5a571d","pdata":{"id":"staging.diksha.app","ver":"2.0.localstaging-debug","pid":"sunbird.app.contentplayer"},"env":"contentplayer","sid":"3dca1987-08fe-4e14-96a3-b0abc924d039","did":"5a6e659672a015f6622af40dbd88407b91d7812e","cdata":[{"id":"offline","type":"PlayerLaunch"},{"id":"85acdc1f64bec03200dbc7d3356514d1","type":"ContentSession"}],"rollup":{"l1":"do_30013062"}},"object":{"id":"do_30013062","type":"Content","ver":"2.0"},"tags":[],"edata":{"type":"content","mode":"play","pageid":"","duration":0.0}}'
    ).subscribe((val) => {
      console.log(val)
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


