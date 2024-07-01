sap.ui.define([
    "sap/ui/test/Opa5"
], function (Opa5) {
    "use strict";

    return Opa5.extend("ui5.ui5conceptsproject.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "ui5.ui5conceptsproject",
                    async: true,
                    manifest: true
                }
            });
        }
    });

});
