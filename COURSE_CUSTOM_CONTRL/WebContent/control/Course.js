sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Image",
	"sap/m/Label",
	"sap/m/RatingIndicator"
	
	
	
], function (Control,Image,Label,RatingIndicator) {
	"use strict";
	return Control .extend("control.Course", {
		 metadata: {
			 
		 
		  properties : { 
		           id : {type : "string"},
		          author:{type : "string"},
		        
			      price :{type : "int"},
			 	 "size" : {type: "sap.ui.core.CSSSize"}                 
          },
          aggregations : {
			    
	    	  img   : {type : "sap.m.Image", multiple: false, visibility : "hidden"},
        	  lbl : {type :"sap.m.Label", multiple : false, visibility: "hidden"},
        	   lbl2 : {type :"sap.m.Label", multiple : false, visibility: "hidden"},
        	   rtng :{type : "sap.m.RatingIndicator", multiple: false, visibility : "hidden"}
        	
        	 
        	 
			},
			
			events : {
				 "hover" : {} 
			}
			
			
		 
      },
     
     
    //////////////////////////////////////////////////////////
    init : function() {
    	
this.setAggregation("img", new Image({
    		
    		src : "image/logo_ui5.png"
    		
    	}).addStyleClass("img"));
   
    	
    
this.setAggregation("lbl", new Label({
    		
    		text : "SAPUI5/FIORI"
    		
    	}).addStyleClass("sapUiTinyMarginTop sapUiTinyMarginBottom"));
    	
    	this.setAggregation("lbl2", new Label({
    		
    		text : "5(2,000)"
    		
    	}).addStyleClass("sapUiSmallMarginBegin sapUiTinyMarginTop sapUiTinyMarginBottom"));
    	
    	
    	
    	this.setAggregation("rtng", new RatingIndicator({
    		
    		iconSize: "1rem",
				visualMode : "Full",
				value : 5
    		
    	}).addStyleClass("sapUiTinyMarginTop sapUiTinyMarginBottom"))
   
    	
   
    	
    
      },
      
      
      onmouseover : function(evt) {   
          this.fireHover();
      },

      renderer:function(oRm, oControl) {
      oRm.write("<div");
      oRm.writeControlData(oControl); 
    
    oRm.writeStyles();
    oRm.addClass("myCourseTile");
	oRm.writeClasses(); 
    oRm.write(">");
     
   
     oRm.write("<div "+oControl.getId()+"></div>");
   
    oRm.renderControl(oControl.getAggregation("img"))
   
  
    oRm.renderControl(oControl.getAggregation("lbl"))
    oRm.write("<br>");
    
    oRm.write("<div>")
    oRm.write("<div>            "+oControl.getAuthor()+"</div>");
   oRm.write("</div>")
    
   
     
     oRm.renderControl(oControl.getAggregation("rtng"))
      oRm.renderControl(oControl.getAggregation("lbl2"))
    
    
     
      
          
          
         oRm.write("<div");
      oRm.writeControlData(oControl); 
    
    oRm.writeStyles();
    oRm.addClass("price");
	oRm.writeClasses("price"); 
    oRm.write(">");
    oRm.write("<div>            ₹ "+oControl.getPrice()+"</div>");
   oRm.write("</div>");      
    
          
          
      
      
   oRm.write("</div>");   
     
     
     
        
        
        
  

    oRm.write("</div>");      
   
    
    
    
    
    
   
      
      
      } 
                 
	});
});