const accountId = 14453                         //CANNOT BE CHANGED,LOCKED VALUE
let accountEmail= "kuchbhikrlobhyi@gmail.com"
var accountPassword="12345"                     //BAD WAY
accountCity="JAIPUR"
let accountState


//accountId=2                     //NOT POSSIBLE/ALLOWED
accountEmail="NAYAHAI@gmail.com"
accountPassword="67890"
accountCity="DELHI"
//console.log(accountId);
console.log(accountEmail)        //changed
console.log(accountPassword)
console.log(accountCity)
console.table([accountEmail,accountPassword,accountCity,accountState])

/*
PREFER NOT TO USE VAR
BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
USE LET AND CONST ONLY
*/