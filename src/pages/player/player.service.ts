import { Injectable } from "@angular/core";
// import { ProfileService } from "sunbird-sdk"
@Injectable()

export class PlayerService {
    constructor() {

    }

    getCurrentUser() {
        // this.profileService.getActiveSessionProfile().toPromise().then((result: any) => {
        //     console.log('getCurrentProfile', result);
        // }).catch((error: any) => {
        //     console.log('error', error);
        // })

        console.log('EventBus.hasEventListener()', window['EventBus'].hasEventListener());
    }
}