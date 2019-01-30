({
	fetchData: function (cmp, fetchData, numberOfRecords) {
       
       
    },
    createObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.contactList");
        console.log("action",action);
        RowItemList.push({
            'sobjectType': 'Contact',
            'To': 'quandevkaizen@gmail.com',
            'CC': 'torres851995@gmail.com',
            'BBC': 'Tran Minh',
            'Subject':'Quan',
            'Body':'tks gift',
            'Upload':'sex.com'
        });
      	
        // set the updated list to attribute (contactList) again    
        
        
          //      alert(JSON.stringify(component.get("v.contactList")));
        
    }
})