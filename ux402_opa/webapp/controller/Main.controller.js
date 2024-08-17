sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
function (Controller, MessageBox) {
    "use strict";

    return Controller.extend("student27.com.sap.training.ux402.opa.ux402opa.controller.Main", {
        onInit: function () {

        },

        onPress: function() {
            MessageBox.show("Button pressed");
        }
    });
});
