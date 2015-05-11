CryptoJS = require("./md5");


function hash(input) {
    input = input.toString();
    input = input.trim();
    input = input.toLowerCase();
    console.log("http://www.gravatar.com/" + CryptoJS(input) + ".json?callback=displayGravatar");
    return "http://www.gravatar.com/" + CryptoJS(input) + ".json?callback=displayGravatar";
};

module.exports = hash;
//1
//2
//echo md5( "MyEmailAddress@example.com " );
//// "f9879d71855b5ff21e4963273a886bfc"
//If we now run that same email address through the above process, you will see that we get a different result (again in PHP):
//
//1
//2
//3
//4
//$email = trim( "MyEmailAddress@example.com " ); // "MyEmailAddress@example.com"
//$email = strtolower( $email ); // "myemailaddress@example.com"
//echo md5( $email );
//// "0bc83cb571cd1c50ba6f3e8a78ef1346"
//This can easily be combined into a single line:
//
//    1
//echo md5( strtolower( trim( "MyEmailAddress@example.com " ) ) );
