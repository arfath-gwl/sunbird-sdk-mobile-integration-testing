export const AppConfig = {
  version: "BUILD_NUMBER",
  appQualifier: "org.ekstep.genieservices",
  processing_timeout: 10, // in minutes
  host: "",
  canvasVersion: "genie-canvas-version",
  recorder: "AUDIO_RECORDER",
  flavor: "DEPLOYMENT",
  heartBeatTime: 180000,
  isCorePluginsPackaged: false, // Default to TRUE, For local development turn off this flag.
  s3ContentHost: "/assets/public/content/",
  previewPluginspath: "/content-plugins",
  devicePluginspath: "/widgets/content-plugins",
  corePluginspath: "coreplugins",
  apislug: "/action",
  telemetryEventsConfigFields: ["env", "sid", "uid", "did", "channel", "etags", "pdata", "cdata", "app", "dims", "partner", "tags", "rollup", "mode", "enableTelemetryValidation"],
  mimetypes: [
    "application/vnd.ekstep.ecml-archive", "application/vnd.ekstep.html-archive", "application/vnd.ekstep.h5p-archive", "application/epub", "video/mp4", "application/pdf", "video/x-youtube", "video/webm"
  ],
  whiteListUrl: [
    'self',
    'https://*.blob.core.windows.net/**',
    'https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/**'
  ],
  defaultMetadata: {
    "identifier": "org.ekstep.videorenderer",
    "mimeType": "video/webm",
    "contentData": {
      "questionnaire": null,
      "appIcon": "stories/pratham-camal/logo.png",
      "subject": "literacy_v2",
      "description": "pratham-camal",
      "name": "Video-Renderer",
      "downloadUrl": "cat.mp4",
      "artifactUrl": "cat.mp4",
      "checksum": null,
      "loadingMessage": "Without requirements or design, programming is the art of adding bugs to an empty text file. ...",
      "concepts": [{
        "identifier": "LO1",
        "name": "Receptive Vocabulary",
        "objectType": "Concept"
      }],
      "identifier": "org.ekstep.videorenderer",
      "grayScaleAppIcon": null,
      "pkgVersion": 1
    },
    "isAvailable": true,
    "path": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513"
  },
  contentLaunchers: [{
    mimeType: ["application/vnd.ekstep.html-archive", "application/vnd.ekstep.h5p-archive"],
    id: "org.ekstep.htmlrenderer",
    ver: 1.0,
    type: "plugin"
  }, {
    mimeType: ["application/vnd.ekstep.ecml-archive"],
    id: "org.ekstep.ecmlrenderer",
    ver: 1.0,
    type: "plugin"
  },
  {
    mimeType: ["application/epub"],
    id: "org.ekstep.epubrenderer",
    ver: 1.0,
    type: "plugin"
  },
  {
    mimeType: ["video/mp4", "video/x-youtube", "video/webm"],
    id: "org.ekstep.videorenderer",
    ver: 1.1,
    type: "plugin"
  },
  {
    mimeType: ["application/pdf"],
    id: "org.ekstep.pdfrenderer",
    ver: 1.0,
    type: "plugin"
  },
  {
    mimeType: ["text/x-url"],
    id: "org.ekstep.extcontentpreview",
    ver: 1.0,
    type: "plugin"
  }

  ],
  assetbase: "assets/icons/",
  defaultPlugins: [{
    id: "org.ekstep.launcher",
    ver: 1.0,
    type: "plugin"
  }, {
    id: "org.ekstep.repo",
    ver: 1.0,
    type: "plugin"
  }, {
    id: "org.ekstep.telemetrysync",
    ver: 1.0,
    type: "plugin"
  }, {
    id: "org.ekstep.toaster",
    ver: 1.0,
    type: "plugin"
  }, {
    id: "org.ekstep.alert",
    ver: 1.0,
    type: "plugin"
  }, {
    id: "org.sunbird.player.userswitcher",
    ver: 1.0,
    type: "plugin"
  },
  {
    id: "org.sunbird.player.endpage",
    ver: 1.1,
    type: "plugin"
  }],
  overlay: {
    enableUserSwitcher: false,
    showUser: false,
    showOverlay: true,
    showNext: true,
    showPrevious: true,
    showSubmit: false,
    showReload: true,
    showContentClose: false,
    menu: {
      showTeachersInstruction: true
    }
  },
  splash: {
    text: "Powered by EkStep",
    icon: "assets/icons/icn_genie.png",
    bgImage: "assets/icons/background_1.png",
    webLink: "https://www.ekstep.in"
  },
  showEndPage: false,
  env: "contentplayer",
  pdata: { "id": "in.ekstep", "ver": "1.0", "pid": "contentplayer" },
  channel: "in.ekstep",
  etags: {
    app: [],
    partner: [],
    dims: []
  },
  tags: [],
  context: {},
  rollup: {},
  config: {}
}

export const customConfig = {
  "appContext": {
    "server": false,
    "local": true
  },
  "context": {
    "pdata": {
      "id": "staging.diksha.app",
      "ver": "2.0.localstaging-debug",
      "pid": "sunbird.app.contentplayer"
    },
    "contentId": "do_21252884005676646411974",
    "did": "afeb38bdb54b6784bbd2015622c52a37e5715988",
    "languageInfo": "",
    "origin": "Genie",
    "deeplinkBasePath": "staging.ntp.net.in://",
    "actor": {
      "type": "User",
      "id": "443cac2e-601c-4592-889f-6eac05112bcb"
    },
    "basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974",
    "appQualifier": "org.sunbird.app.staging",
    "sid": "f2c9153f-bd25-4b93-8fc2-25ca2393ea72",
    "mode": "play",
    "tags": [],
    "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
    "cdata": [
      {
        "id": "offline",
        "type": "PlayerLaunch"
      }
    ]
  },
  "config": {
    "splash": {
      "text": "",
      "icon": "",
      "webLink": ""
    },
    "showEndPage": false,
    "overlay": {
      "enableUserSwitcher": true,
      "showUser": true
    },
    "repos": "/widgets/content-plugins"
  },
  "metadata": {
    "appIcon": "do_21252884005676646411974/3_1519885914935.jpg",
    "artifactUrl": "do_21252884005676646411974/1529399624900_do_21252884005676646411974.zip",
    "audience": [
      "Learner"
    ],
    "board": "State (Rajasthan)",
    "channel": "012315809814749184151",
    "contentDisposition": "inline",
    "contentEncoding": "gzip",
    "contentType": "Resource",
    "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
    "createdOn": "2018-06-19T09:10:20.991+0000",
    "creator": "Ntp creator Uswr",
    "description": "Untitled Collection",
    "downloadUrl": "do_21252884005676646411974/1529399624900_do_21252884005676646411974.zip",
    "framework": "NCF",
    "gradeLevel": [
      "Class 1"
    ],
    "identifier": "do_21252884005676646411974",
    "language": [
      "English"
    ],
    "lastPublishedOn": "2018-06-19T09:13:45.145+0000",
    "medium": "English",
    "mimeType": "application/vnd.ekstep.ecml-archive",
    "name": "Rajasthan",
    "osId": "org.ekstep.quiz.app",
    "pkgVersion": "1.0",
    "previewUrl": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974",
    "resourceType": "Test",
    "status": "Live",
    "streamingUrl": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974",
    "subject": "English",
    "versionKey": "1529399624465",
    "isAvailableLocally": true,
    "basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974",
    "rollup": {
      "l1": "do_21252884005676646411974"
    },
    "basepath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974"
  },
  "data": {
    "theme": {
      "manifest": {
        "media": [
          {
            "ver": 1,
            "plugin": "org.ekstep.navigation",
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/widgets/content-plugins/org.ekstep.navigation-1.0/renderer/controller/navigation_ctrl.js",
            "id": "1749ee38-73ba-45b4-84ba-a9c7e10e0299",
            "type": "js"
          },
          {
            "ver": 1,
            "plugin": "org.ekstep.navigation",
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/widgets/content-plugins/org.ekstep.navigation-1.0/renderer/templates/navigation.html",
            "id": "33a38166-e4a3-4c60-b787-1e924a73305d",
            "type": "js"
          },
          {
            "ver": 1,
            "plugin": "org.ekstep.navigation",
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/widgets/content-plugins/org.ekstep.navigation-1.0/renderer/plugin.js",
            "id": "org.ekstep.navigation",
            "type": "plugin"
          },
          {
            "ver": 1,
            "plugin": "org.ekstep.navigation",
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/widgets/content-plugins/org.ekstep.navigation-1.0/manifest.json",
            "id": "org.ekstep.navigation_manifest",
            "type": "json"
          },
          {
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/assets/assets/public/content/do_212450905413713920137/artifact/3_1519885914935.jpg",
            "id": "do_212450905413713920137",
            "type": "image"
          },
          {
            "src": "file:////storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252884005676646411974/assets/assets/public/content/do_21244188730232012811910/artifact/113-600x337_1518785071391.jpg",
            "id": "do_21244188730232012811910",
            "type": "image"
          }
        ]
      },
      "stage": [
        {
          "config": {
            "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#FFFFFF\",\"genieControls\":false,\"instructions\":\"\"}"
          },
          "param": {
            "name": "next",
            "value": "a8d26c15-a2d2-4bb7-a7c6-9891518b13ad"
          },
          "image": {
            "config": {
              "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true}"
            },
            "rotate": 0,
            "z-index": -1,
            "w": 102.08,
            "x": -2.26,
            "h": 100,
            "y": -0.25,
            "id": "c18bbcec-3d67-477c-a746-45c8dcd26cba",
            "asset": "do_212450905413713920137",
            "pluginType": "image",
            "font": "NotoSans, NotoSansGujarati, NotoSansOriya, NotoSansMalayalam"
          },
          "manifest": {
            "media": {
              "assetId": "do_212450905413713920137"
            }
          },
          "w": 100,
          "x": 0,
          "h": 100,
          "y": 0,
          "id": "52a4c389-0a3c-4cba-b45e-904e0a356ab8"
        },
        {
          "config": {
            "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#FFFFFF\",\"genieControls\":false,\"instructions\":\"\"}"
          },
          "param": [
            {
              "name": "previous",
              "value": "52a4c389-0a3c-4cba-b45e-904e0a356ab8"
            },
            {
              "name": "next",
              "value": "3d229394-85e8-4573-bc47-b3e0e4b0658e"
            }
          ],
          "shape": [
            {
              "config": {
                "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#000000\",\"points\":[{\"x\":0,\"y\":50},{\"x\":25,\"y\":0},{\"x\":25,\"y\":25},{\"x\":75,\"y\":25},{\"x\":75,\"y\":0},{\"x\":100,\"y\":50},{\"x\":75,\"y\":100},{\"x\":75,\"y\":75},{\"x\":25,\"y\":75},{\"x\":25,\"y\":100}]}"
              },
              "strokeWidth": 1,
              "rotate": 0,
              "z-index": 0,
              "h": 25,
              "type": "harrow",
              "fill": "#000000",
              "stroke": "rgba(255, 255, 255, 0)",
              "w": 30,
              "x": 30.97,
              "y": 7.9,
              "id": "ca4da121-90e3-4341-89ce-88d56d100429",
              "opacity": 1
            },
            {
              "config": {
                "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#FF0000\",\"sides\":5,\"points\":[{\"x\":50,\"y\":0},{\"x\":100,\"y\":34.5},{\"x\":79.4,\"y\":100},{\"x\":20.6,\"y\":100},{\"x\":0,\"y\":34.5}]}"
              },
              "strokeWidth": 1,
              "rotate": 0,
              "z-index": 1,
              "h": 25,
              "type": "polygon",
              "fill": "#FF0000",
              "stroke": "rgba(255, 255, 255, 0)",
              "w": 14,
              "x": 39.31,
              "y": 26.67,
              "sides": 5,
              "id": "40aadd71-c88c-4ae8-a6d1-7abe0c1a0401",
              "opacity": 1
            },
            {
              "config": {
                "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#00FF00\",\"radius\":64.8}"
              },
              "strokeWidth": 1,
              "rotate": 0,
              "z-index": 2,
              "h": 32,
              "type": "ellipse",
              "fill": "#00FF00",
              "stroke": "rgba(255, 255, 255, 0)",
              "r": 64.8,
              "w": 18,
              "x": 37.92,
              "y": 51.05,
              "id": "097c13d0-c739-4658-8453-847e548708d1",
              "opacity": 1
            }
          ],
          "w": 100,
          "x": 0,
          "h": 100,
          "y": 0,
          "id": "a8d26c15-a2d2-4bb7-a7c6-9891518b13ad"
        },
        {
          "config": {
            "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#FFFFFF\",\"genieControls\":false,\"instructions\":\"\"}"
          },
          "param": {
            "name": "previous",
            "value": "a8d26c15-a2d2-4bb7-a7c6-9891518b13ad"
          },
          "shape": {
            "config": {
              "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true,\"color\":\"#00FF00\",\"radius\":64.8}"
            },
            "strokeWidth": 1,
            "rotate": 0,
            "z-index": 0,
            "h": 32,
            "type": "ellipse",
            "fill": "#00FF00",
            "stroke": "rgba(255, 255, 255, 0)",
            "r": 64.8,
            "w": 18,
            "x": 15,
            "y": 15,
            "id": "07ee4584-646e-464e-8839-153e815e491c",
            "opacity": 1
          },
          "image": {
            "config": {
              "__cdata": "{\"opacity\":100,\"strokeWidth\":1,\"stroke\":\"rgba(255, 255, 255, 0)\",\"autoplay\":false,\"visible\":true}"
            },
            "rotate": 0,
            "z-index": 1,
            "w": 49.61,
            "x": 40,
            "h": 49.5,
            "y": 3.21,
            "id": "c6163cd1-bdce-4079-866d-9b2165de52c8",
            "asset": "do_21244188730232012811910"
          },
          "manifest": {
            "media": {
              "assetId": "do_21244188730232012811910"
            }
          },
          "w": 100,
          "x": 0,
          "h": 100,
          "y": 0,
          "id": "3d229394-85e8-4573-bc47-b3e0e4b0658e"
        }
      ],
      "plugin-manifest": {
        "plugin": {
          "ver": "1.0",
          "depends": "",
          "id": "org.ekstep.navigation",
          "type": "plugin"
        }
      },
      "compatibilityVersion": 2,
      "id": "theme",
      "version": 1,
      "startStage": "52a4c389-0a3c-4cba-b45e-904e0a356ab8",
      "canvasId": "gameCanvas",
      "font": "NotoSans, NotoSansGujarati, NotoSansOriya, NotoSansMalayalam"
    }
  }
}

export const canvasConfig = {
  "version": "BUILD_NUMBER",
  "appQualifier": "org.ekstep.genieservices",
  "processing_timeout": 10,
  "host": "",
  "canvasVersion": "genie-canvas-version",
  "recorder": "AUDIO_RECORDER",
  "flavor": "DEPLOYMENT",
  "heartBeatTime": 180000,
  "isCorePluginsPackaged": false,
  "s3ContentHost": "/assets/public/content/",
  "previewPluginspath": "/content-plugins",
  "devicePluginspath": "/widgets/content-plugins",
  "corePluginspath": "coreplugins",
  "apislug": "/action",
  "telemetryEventsConfigFields": [
    "env",
    "sid",
    "uid",
    "did",
    "channel",
    "etags",
    "pdata",
    "cdata",
    "app",
    "dims",
    "partner",
    "tags",
    "rollup",
    "mode",
    "enableTelemetryValidation"
  ],
  "mimetypes": [
    "application/vnd.ekstep.ecml-archive",
    "application/vnd.ekstep.html-archive",
    "application/vnd.ekstep.h5p-archive",
    "application/epub",
    "video/mp4",
    "application/pdf",
    "video/x-youtube",
    "video/webm"
  ],
  "whiteListUrl": [
    "self",
    "https://*.blob.core.windows.net/**",
    "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/**"
  ],
  "defaultMetadata": {
    "identifier": "org.ekstep.item.sample",
    "mimeType": "application/vnd.ekstep.ecml-archive",
    "name": "Content Preview ",
    "author": "EkStep",
    "localData": {
      "name": "Content Preview ",
      "loadingMessage": "Without requirements or design, programming is the art of adding bugs to an empty text file. ...",
      "identifier": "org.ekstep.item.sample",
      "pkgVersion": 1
    },
    "isAvailable": true,
    "path": ""
  },
  "contentLaunchers": [
    {
      "mimeType": [
        "application/vnd.ekstep.html-archive",
        "application/vnd.ekstep.h5p-archive"
      ],
      "id": "org.ekstep.htmlrenderer",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "mimeType": [
        "application/vnd.ekstep.ecml-archive"
      ],
      "id": "org.ekstep.ecmlrenderer",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "mimeType": [
        "application/epub"
      ],
      "id": "org.ekstep.epubrenderer",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "mimeType": [
        "video/mp4",
        "video/x-youtube",
        "video/webm"
      ],
      "id": "org.ekstep.videorenderer",
      "ver": "1.1",
      "type": "plugin"
    },
    {
      "mimeType": [
        "application/pdf"
      ],
      "id": "org.ekstep.pdfrenderer",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "mimeType": [
        "text/x-url"
      ],
      "id": "org.ekstep.extcontentpreview",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.ekstep.overlay",
      "ver": "1.0",
      "type": "plugin"
    }
  ],
  "assetbase": "assets/icons/",
  "defaultPlugins": [
    {
      "id": "org.ekstep.launcher",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.ekstep.repo",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.ekstep.telemetrysync",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.ekstep.toaster",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.ekstep.alert",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.sunbird.player.userswitcher",
      "ver": "1.0",
      "type": "plugin"
    },
    {
      "id": "org.sunbird.player.endpage",
      "ver": "1.1",
      "type": "plugin"
    }
  ],
  "overlay": {
    "enableUserSwitcher": false,
    "showUser": false,
    "showOverlay": true,
    "showNext": true,
    "showPrevious": true,
    "showSubmit": false,
    "showReload": true,
    "showContentClose": false,
    "menu": {
      "showTeachersInstruction": true
    }
  },
  "splash": {
    "text": "Powered by EkStep",
    "icon": "assets/icons/icn_genie.png",
    "bgImage": "assets/icons/background_1.png",
    "webLink": "https://www.ekstep.in"
  },
  "showEndPage": false,
  "env": "contentplayer",
  "pdata": {
    "id": "in.ekstep",
    "ver": "1.0",
    "pid": "contentplayer"
  },
  "channel": "in.ekstep",
  "etags": {
    "app": [],
    "partner": [],
    "dims": []
  },
  "tags": [],
  "context": {},
  "rollup": {},
  "config": {
    "repos": "/content-plugins"
  },
  "origin": "Genie",
  "contentId": "org.ekstep.num.addition.by.grouping",
  "appInfo": {
    "code": "org.ekstep.contentplayer",
    "mimeType": "application/vnd.android.package-archive",
    "identifier": "org.ekstep.contentplayer"
  },
  "otherData": {
    "env": "contentplayer",
    "channel": "in.ekstep",
    "etags": {
      "dims": [],
      "app": [],
      "partner": []
    },
    "pdata": {
      "id": "in.ekstep",
      "ver": "1.0",
      "pid": "contentplayer"
    },
    "tags": [],
    "rollup": {}
  },
  "basepath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
  "basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513"
}