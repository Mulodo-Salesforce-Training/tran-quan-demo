public class sendEmailLCCC {
    public static void sendMail(){
       // String[] addresses = new String[]{},
           	   // subjects = new String[]{},
            //    messages = new String[]{};
	  //addresses.add('quandevkaizen@gmail.com');
      // subjects.add('1');
      // messages.add('1');
      // EmailManager.sendMail(addresses, subjects, messages);
        // String[] addresses = new String []{},
        // subjects = new String []{},
        // messages = new String []{},
        String address  = 'tran.quan@mulodo.com';
        String[] bcc = new String[]{'quandevkaizen@gmail.com','tran.quan@mulodo.com'};
        String[] cc = new String[]{'quandevkaizen@gmail.com','torres851995@gmail.com'};
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        if(String.isEmpty(address)){
        	message.setCcAddresses(cc);
        }else if(String.isEmpty(address)&&cc.size()<0){
        	message.setBccAddresses(bcc); 
        }else{
            message.toAddresses = new String[] { address };
        }
        message.optOutPolicy = 'FILTER';
        message.subject = 'Opt Out Test Message';
        message.plainTextBody = 'This is the message body.';
        Messaging.SingleEmailMessage[] messages = 
            new List<Messaging.SingleEmailMessage> {message};
                 Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        if (results[0].success) {
            System.debug('The email was sent successfully.');
            Recipient__c recipent = new Recipient__c(To__c='quandevkaizen@gmail.com',Subject__c='Opt Out Test Message',Body__c='This is the message body.');
            insert recipent;
            Messaging.SingleEmailMessage message1 = new Messaging.SingleEmailMessage();
            message1.toAddresses = new String[] { 'torres851995@gmail.com' };
            message1.optOutPolicy = 'REJECT';
            message1.subject = 'Recipient is recived ';
            message1.plainTextBody = 'Recipient is recived';
            Messaging.SingleEmailMessage[] messages1 = 
                new List<Messaging.SingleEmailMessage> {message1};
                 Messaging.SendEmailResult[] results1 = Messaging.sendEmail(messages1);
        } else {
            System.debug('The email failed to send: '
                  + results[0].errors[0].message);
        }
    }
}