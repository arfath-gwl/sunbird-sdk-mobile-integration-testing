import {Component, Inject} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ApiService, HttpRequestType, Request} from 'sunbird-sdk';

/**
 * Generated class for the ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              @Inject('API_SERVICE') private apiService: ApiService) {
  }

  ionViewDidLoad() {
  }

  public onClickToInvokeUnprotectedApi() {
    const request = new Request.Builder()
      .withType(HttpRequestType.POST)
      .withPath('/api/data/v1/page/assemble')
      .withBody({
        "request": {
          "source": "web",
          "name": "Resource",
          "filters": {
            "objectType": [
              "Content"
            ],
            "contentType": [
              "Story",
              "Worksheet",
              "Collection",
              "Game"
            ],
            "gradeLevel": [
              "Grade 1"
            ],
            "ageGroup": [
              "5-6"
            ],
            "status": [
              "Live"
            ],
            "language": [
              "Hindi"
            ],
            "channel": [
              "abc"
            ]
          }
        }
      })
      .build();
    this.apiService.fetch(request).subscribe((r) => {
      console.log(r);
    }, (e) => {
      console.log(e);
    });
  }

  public onClickToInvokeApiTokenProtectedApi() {
    const request = new Request.Builder()
      .withApiToken(true)
      .withType(HttpRequestType.POST)
      .withPath('/api/data/v1/telemetry')
      .withBody({
        "id": "ekstep.telemetry",
        "ver": "2.0",
        "ets": 1455031059061,
        "params": {
          "did": "e97987fa-c056-411d-hfkf-c23496093ujd",
          "key": "57c176ca-1977-4785-af9e-d59d37214b0b",
          "msgid": "7x87bc51-afbg-4344-88bc-a2a90df5fd76"
        },
        "events": [
          {
            "tags": [
              {
                "partnerid": [
                  "org.ekstep.ep"
                ]
              },
              {
                "genie": [
                  "eptest"
                ]
              }
            ],
            "uid": "",
            "sid": "",
            "ts": "2017-04-06T10:44:38.929+0530",
            "edata": {
              "eks": {
                "data": "sXF/1gCVSjIQt3ySuE76m7KI3J6TxxL2lSbJC3pwQTzH7CToL9yxs0rpVr1BYEnvkbGgGrPK0Uya\nD/E4sASo8asmWVALxET0kEjdN68UHM5A8Mdnvs43d99ciObMTMM3JKGrDFx+QOic8ZMZxc37gJSC\nfptpEdH2uIeId7NHxUayMOQePdOmrVvRjx2s+z7F\n",
                "iv": "ZgLlYLiPz9zc6Xp+TbbWuA==\n",
                "key": "e0wDI2jLtFSc0Tp8fc5rsJYl3n+ncZbFcmDRJ7ek3LTQpeyrkdVS8mrUAPY5w1wEhNA83YvJO9xd\nVa6+OSsJgThfjV2AH/kXRbxi3F18G4w8pKlkLKJYbj7vPkpkxrCWOidOiN1cr4n+S4oQfhmCqgEv\neGYv5L7InkQGjIud1H4=\n",
                "partnerid": "9e94fb35",
                "publickeyid": "[B@41e9ad00"
              }
            },
            "did": "316955bd440567a9f3eeb8a6ed7dd3f98004d41b",
            "ver": "2.0",
            "type": "events",
            "eid": "GE_PARTNER_DATA",
            "@version": "1",
            "gdata": {
              "id": "genieservice.android",
              "ver": "5.4.localqa-debug"
            },
            "ets": 1491479827198,
            "uuid": "86190d23-5168-45f5-b29d-c55e120b8de6100",
            "mid": "e39de153-8cd9-430a-a9ae-93212495cea2",
            "key": ""
          }
        ]
      })
      .build();

    this.apiService.fetch(request).subscribe((r) => {
      console.log(r);
    }, (e) => {
      console.log(e);
    })
  }

  public onClickToInvokeSessionTokenProtectedApi() {
    const request = new Request.Builder()
      .withApiToken(true)
      .withSessionToken(true)
      .withType(HttpRequestType.POST)
      .withPath('/api/user/v1/search')
      .withBody({
        "id": "unique API ID",
        "ts": "2013/10/15 16:16:39",
        "params": {},
        "request": {
          "query": "user",
          "filters": {
            "identifier": ["659b011a-06ec-4107-84ad-955e16b0a48a"]
          },
          "fields": ["identifier", "lastName", "firstName"],
          "offset": 0,
          "limit": 10
        }
      })
      .build();

    this.apiService.fetch(request).subscribe((r) => {
      console.log(r);
    }, (e) => {
      console.log(e);
    })
  }

}
