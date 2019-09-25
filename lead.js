if (typeof (Crimson) == "undefined") {
    Crimson = {
        __namespace: true
    };
};

if (typeof (Crimson.UoB) == "undefined") {
    Crimson.UoB = {
        __namespace: true
    };
};

if (typeof (Crimson.UoB.campaignresponse) == "undefined") {

    Crimson.UoB.campaignresponse = {
        __namespace: true
    };
};

Crimson.UoB.campaignresponse.SetVisibleForOtherDietaryRequirements = function (executionContext) {
    if (arguments === null || arguments.length === 0 || typeof arguments[0].getFormContext !== "function") {
        Xrm.Navigation.openAlertDialog({
            text: "executionContext has not been passed into function:" + arguments.callee.name
        });
        return;
    }


    var formContext = executionContext.getFormContext();
    var dietaryOptionsField = formContext.getAttribute("ccl1002_dietaryoptions");
    var dietaryOptionsFieldValue = 0;
    if (dietaryOptionsField != null) {
        dietaryOptionsFieldValue = dietaryOptionsField.getValue();
    }
    if (dietaryOptionsFieldValue == 890200003) { //Dietary Options enquals "Other"
        formContext.getControl('ccl1002_otherdietaryrequirements').setVisible(true);
        
    } else {
        formContext.getControl('ccl1002_otherdietaryrequirements').setVisible(false);

    }
}

