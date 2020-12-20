$SD.on('connected', (jsn) => {
    console.log("connected");
    console.log(jsn);
    if(jsn.hasOwnProperty("actionInfo")) {
            let settings = Utils.getProp(jsn, "actionInfo.payload.settings",{});
            document.getElementById("teamsuserinput").value = settings.teamsuserinput || "john.doe@acme.com"
    }
});

const save = function () {
    if($SD){
        var payload = {};
        [].forEach.call(document.querySelectorAll(".grouping"), element => {
            payload[element.id] = element.value;
        });
        $SD.api.sendToPlugin($SD.uuid, $SD.actionInfo["action"], payload);
    }
}