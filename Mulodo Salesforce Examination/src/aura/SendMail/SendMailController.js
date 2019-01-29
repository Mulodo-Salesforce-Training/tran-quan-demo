({
	myAction : function (cmp, event, helper) {
     console.log('here');
    },
    handleFocus: function (cmp, event) {
        console.log('Input Seven has recieved the focus.');
    },
    handleClick: function (component, event) {
        var to = component.find('inputTo').get('v.value');
        var cc = component.find('inputCC').get('v.value');
        var bbc = component.find('inputBBC').get('v.value');
        var subject = component.find('inputSubject').get('v.value');
        var body = component.find('inputBody').get('v.value');
        var richText = component.find('inputRichText').get('v.value');
        console.log('to'+to+'cc'+cc+'inputRichText' +richText);
    
    },
    valueChangeValidation : function(component, event, helper) {
    	
	},
    getInput : function(cmp, event,helper) {
      var fullName = cmp.find("name").get("v.value");
      var to = cmp.find("to").get("v.value");
      var bbc = cmp.find("bbc").get("v.value");
      var cc = cmp.find("cc").get("v.value");
      var subject = cmp.find("subject").get("v.value");
      var body = cmp.find("body").get("v.value"); 
        console.log('fullName : '+fullName+'To : '+to+'BBC : '+bbc+'CC :'+cc+'subject : '+subject+'Body'+body);
    },
    doInit : function(cmp,event,helper){
        helper.createObjectData(cmp,event);
    }
    
})