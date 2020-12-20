$SD.on('connected', (jsonObj) => connected(jsonObj));

function connected(jsn) {
    /** subscribe to the willAppear and other events */
    $SD.on('global.andyandtheteams.teams.action.willAppear', (jsonObj) => action.onWillAppear(jsonObj));
    $SD.on('global.andyandtheteams.teams.action.keyUp', (jsonObj) => action.onKeyUp(jsonObj));
    $SD.on('global.andyandtheteams.teams.action.sendToPlugin', (jsonObj) => action.onSendToPlugin(jsonObj));
};

const action = {
    settings:{},


    onWillAppear: function (jsn) {
        console.log(`[onWillAppear] ${JSON.stringify(jsn)}`);
    },

    onKeyUp: function (jsn, context, urlToOpen) {
            SDApi.send(context, 'openUrl', {
            payload: {
                url: "https://teams.microsoft.com/l/chat/0/0?users=" + jsn.payload.settings.teamsuserinput
            }
        });
    },

    onSendToPlugin: function (jsn) {
        console.log(`[onSendToPlugin] ${JSON.stringify(jsn)}`);
        if(jsn.payload){
            $SD.api.setSettings(jsn.context, jsn.payload);
        }
    },

};

