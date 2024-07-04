sap.ui.define([
    'sap/ui/core/ComponentContainer'
], function(ComponentContainer) {
    'use strict';
    
    var oContainer = new ComponentContainer({
        id: "container",
        name: "practice",
        manifest: true,
        async: true,
        settings: {
            id: "practice",
        }
    });

    oContainer.placeAt("content");
});