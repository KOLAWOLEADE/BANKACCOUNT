let bankAccount = new BANKACCOUNT
let contact1 = new Contact (Nana, Akuaba, 07033333333)
let contact2 = new Contact (Johnson, Alomaja, 08033333333)
let contact3 = new Contact (Johnson, Bolaji, 09033333333)
bankAccount.addContanct = 


// BANKACCOUNT OPENING

function BANKACCOUNT(){
    this.contacts = {}
    this.accountNumber = "0010298291";
    this.currentId = 0;
}

// LOGIC FOR CONTACT

function contacts (firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

// PLACING ID AND CONTACT SIDE BY SIDE
BANKACCOUNT.addContanct = function (contact){
    contact.Id = this.assignId();
    this.contacts[contact.Id] = contact;
};



// ASSIGNING ACOUNT NUMBER TO CLIENT

BANKACCOUNT.assignNumber = function() {
    accountNumber += 3829;
    return accountNumber;
};

// ASSINGING ID NUMBER TO EACH ACCOUNT AND ID INCREMENT

BANKACCOUNT.assignId = function(){
    currentId ++;
    return currentId;
};



