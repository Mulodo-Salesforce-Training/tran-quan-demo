public class sendEmailLCCC {
    @AuraEnabled
    public static void sendMail(String Email,String Cc1,String Bcc1,String Subject,String Body){
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
        //String address  = 'tran.quan@mulodo.com';
        String[] bcc = new String[]{Bcc1};
        String[] cc = new String[]{Cc1};
        Messaging.SingleEmailMessage message = new Messaging.SingleEmailMessage();
        if(String.isEmpty(Email)){
        	message.setCcAddresses(cc);
        }else if(String.isEmpty(Email)&&cc.size()<0){
        	message.setBccAddresses(bcc); 
        }else{
            message.toAddresses = new String[] { Email };
        }
        message.optOutPolicy = 'FILTER';
        message.subject = Subject;
        message.plainTextBody = Body;
        Messaging.SingleEmailMessage[] messages = 
            new List<Messaging.SingleEmailMessage> {message};
                 Messaging.SendEmailResult[] results = Messaging.sendEmail(messages);
        if (results[0].success) {
            System.debug('The email was sent successfully.');
            Recipient__c recipent = new Recipient__c(To__c='torres851995@gmail.com',Subject__c=Subject,Body__c=Body);
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
    
    @AuraEnabled
    public static List<Recipient__c> getRecipient(){
        return [SELECT To__c,CC__c,BCC__c,Body__c,Subject__c  FROM Recipient__c];
    }
}