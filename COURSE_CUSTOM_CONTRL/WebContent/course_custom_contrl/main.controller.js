sap.ui.controller("course_custom_contrl.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf course_custom_contrl.main
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf course_custom_contrl.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf course_custom_contrl.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf course_custom_contrl.main
*/
//	onExit: function() {
//
//	}
	
	
	onmouseover : function(evt) {
		   /* alert("Button was pressed.");*/
		 
		 
		 var popover=this.getView().byId("idmain1--idcourse");
		    var oDialog = new sap.m.Popover({
		    	showHeader :  false,
		    	placement : "Horizontal"
		    	
		    	
		    	
		    });
		   
		    
		    
		    
		   var  Enroll = new sap.m.Button({text : "Enroll"}) 
		  var   demo = new sap.m.Button({text : "Register for Demo"}) 
		   var  content = new sap.m.Button({text :"Content"}) 
		    
	   	 		
	   	 	
	 	 	$.sap.require("sap.ui.layout.form.SimpleForm")
	   	 	
	        var simplform = new sap.ui.layout.form.SimpleForm({
	        	 
	        	 content:[Enroll,demo,content ]
	        	
	        	
	        	
	        }) 
	 	 	
	 	 	
	 	 	
	   	 	oDialog.addContent(simplform)
		    
		    
		    oDialog.openBy(popover);
		   
		   oDialog.addButton(new sap.m.Button({text: "cancel",press:function(oEvent){
				
				 oDialog.close()
			}.bind(this)
		   
	 }))
		   
	 }

});