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
    this.phoneNumber = phoneNumber
}



// ASSIGNING ACOUNT NUMBER TO CLIENT

BANKACCOUNT.assignNumber = function() {
    accountNumber += 3829;
    return accountNumber;
};

// ASSINGING ID NUMBER TO EACH ACCOUNT

BANKACCOUNT.assignId = function(){
    currentId ++;
    return currentId;
};
