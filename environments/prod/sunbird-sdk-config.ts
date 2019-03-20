import {SdkConfig} from 'sunbird-sdk';

export const SunbirdSdkConfig: SdkConfig = {
  fileConfig: {
    debugMode: false
  },
  apiConfig: {
    debugMode: false,
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
    debugMode: false,
    dbName: 'GenieServices.db'
  },
  contentServiceConfig: {
    apiPath: '/api/content/v1',
    searchApiPath: '/api/composite/v1'
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
    deviceRegisterApiPath: '/register',
    telemetryApiPath: '/api/data/v1',
    telemetrySyncBandwidth: 2,
    telemetrySyncThreshold: 2,
  },
  eventsBusConfig: {
    debugMode: true
  }
};
