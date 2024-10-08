sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox'
], function(Controller, MessageBox) {
    'use strict';
    
    return Controller.extend("practice.controller.App", {
        onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
          }
    });
});