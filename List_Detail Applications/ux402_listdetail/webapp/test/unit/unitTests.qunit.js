/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student27comsaptrainingux402listdetail/ux402_listdetail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
