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
        component.set("v.message", to);
        var action = component.get("c.sendMail");
        console.log('to'+to);
        action.setParams({
            "Email" : to,
            "Cc1" : cc,
            "Bcc1" : bbc,
            "Subject" : subject,
            "Body" : body
        });
        
        action.setCallback(this, function (response) {
            console.log('response',response);
            var state = response.getState();
            if (state === "SUCCESS") {
            	response.sendMail;
            }
        });
        $A.enqueueAction(action);      
    
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
        var action = cmp.get("c.getRecipient");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var results = response.getReturnValue();
                cmp.set("v.recipients", response.getReturnValue());
                cmp.set("v.data",results);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
        
        cmp.set('v.columns', [
            {label: 'To', fieldName: 'To__c', type: 'text'},
            {label: 'Bcc', fieldName: 'BCC__c', type: 'text'},
            {label: 'CC', fieldName: 'CC__c', type: 'text'},
            {label: 'Subject', fieldName: 'Subject__c', type: 'text'},
            {label: 'Body', fieldName: 'Body__c', type: 'text'},
            {label: 'Attachment', fieldName: '', type: 'text'},
            {label: 'View', type: 'button', initialWidth: 135, typeAttributes: { label: 'View Details', name: '', title: 'Click to View Details'}}
        ]);
    },
    handleUploadFinished: function (cmp, event) {
        var uploadedFiles = event.getParam("files");
        var documentId = uploadedFiles[0].documentId;
        var fileName = uploadedFiles[0].name;
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "message": "File "+fileName+" Uploaded successfully."
        });
        toastEvent.fire();
        
        $A.get('e.lightning:openFiles').fire({
            recordIds: [documentId]
        });        
    }
    
})