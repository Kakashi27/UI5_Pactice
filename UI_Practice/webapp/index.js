sap.ui.define([
    'sap/ui/core/mvc/XMLView'
], function(XMLView) {
    'use strict';
    
    //Instantiating a View
    XMLView.create({
        id: "App",
        viewName: "practice.view.App"
    }).then(function(oView) {
        oView.placeAt("content");
    });
});