sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
            var sResult;
            switch (sStatus) {
				case "A":
                    sResult = resourceBundle.getText("invoiceStatusA");
                    break;
				case "B":
                    sResult = resourceBundle.getText("invoiceStatusB");
                    break;
				case "C":
                    sResult = resourceBundle.getText("invoiceStatusC");
                    break;
				default:
                         sResult = sStatus;
            }
            return sResult;
		}
	};
});