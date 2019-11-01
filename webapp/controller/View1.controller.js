sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.zday8.controller.View1", {
		
		onValueHelpRequested: function (oEvent) {
			var id = oEvent.getParameters().id.split('--')[2];
			var oDialog = new sap.ui.xmlfragment("demo.zday8.fragments.fragmentData", this);
			this.getView().addDependent(oDialog);
			oDialog.bindAggregation("items", {
				path: "city>/city",
				template: new sap.m.StandardListItem({
					title: "{city>name}"
				})

			});

			oDialog.open();

		},
		_handleValueHelpClose: function (evt) {

			var oSelectedItem = evt.getParameter("selectedItem");
			if (oSelectedItem) {
				var productInput = this.byId("id1");
				productInput.setValue(oSelectedItem.getTitle());
			}
			evt.getSource().getBinding("items").filter([]);
		}

	});
});