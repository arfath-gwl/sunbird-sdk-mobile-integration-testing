if (!window.genieservice) {
    // window.SunbirdSdk.profileService.getActiveProfileSession().subscribe((data) => {
    //     console.log("data", data);
    // })
    var _sunbirdSdk = window.SunbirdSdk;

    getCurrentUser = function () {
        return window.SunbirdSdk.profileService.getActiveProfileSession().toPromise();
    }

    getAllUserProfile = function (profileRequest) {
        console.log("getAllUserProfile got called");
        return window.SunbirdSdk.profileService.getAllProfiles(profileRequest).toPromise();
    }

    setUser = function (userId) {
        return window.SunbirdSdk.profileService.setActiveSessionForProfile(userId).toPromise();
    }

    getContent = function (contentId) {
        return window.SunbirdSdk.contentService.getContents(contentId).toPromise();
    }

    getRelatedContent = function () {
        return "getRelatedContent tobe defined";
    }

    getContentList = function (filter) {
        return window.SunbirdSdk.contentService.getContents(filter).toPromise();
    }

    sendFeedback = function (args) {
        return window.SunbirdSdk.contentFeedbackService.sendFeedback(args).toPromise();
    }

    languageSearch = function (filter) {
        console.log('languageSearch to be defined');
    }

    endGenieCanvas = function () {
        console.log('endGenieCanvas to be defined');
    }

    endContent = function () {
        console.log('endContent to be defined');
    }

    launchContent = function () {
        console.log('launchContent to be defined');
    }
    window.genieservice = (function () {
        return {
            getCurrentUser,
            getAllUserProfile,
            setUser,
            getContent,
            getRelatedContent,
            getContentList,
            sendFeedback,
            endGenieCanvas,
            endContent,
            launchContent
        }
    })();
    console.log("GenieService Loaded");
} else {
    console.log("genieservice", genieservice);
}

// module.exports = genieservice();
