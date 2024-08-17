/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student27comsaptrainingux402opa/ux402_opa/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
