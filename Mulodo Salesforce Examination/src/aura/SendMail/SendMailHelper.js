({
	fetchData2: function (cmp, fetchData, numberOfRecords) {
     	var value = cmp.get('v.value');
        value.callback
	},
    createObjectData: function(component, event) {
        // get the contactList from component and add(push) New Object to List  
        var RowItemList = component.get("v.contactList");
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