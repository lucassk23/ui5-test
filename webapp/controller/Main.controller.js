sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("megaacademy.mod2aul2.controller.Main", {
        onInit() {
            let oModelGlobal = this.getOwnerComponent().getModel();
            //let oModelLocal = new JSONModel();
            oModelGlobal.loadData("https://swapi.dev/api/people/");
            //this.getView().setModel(oModelLocal);
        },
        onSearchCharacter:function(oEvent){
            //this.getView().byId("StepInput").getValue();
            let characterId = oEvent.getParameter("value");
            this.getOwnerComponent().getModel().loadData("https://swapi.dev/api/people/" + characterId);


        }
    }
);
});