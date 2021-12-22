// Variables
var enter;
var confirmNumber;
var confirmSpecial;
var confirmUppercase;
var confirmLowercase;

number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
special = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "[", "}", "]", "'", ";", ":", "/", "?", ">", "<", ".", ",", "\\"];
az = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Options declared so they can be concatenated
var options;

// Converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};

// Creates a variable for uppercase conversion
az2 = az.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});

// Function to generate password
function generatePassword() {
    
    enter = parseInt(prompt("How long would you like your password to be? Choose between 8 and 128."));

    if (!enter) {
        alert("This requires a numerical value.");
        generatePassword();
    
    } 
    
    else if (enter < 8 || enter > 128) {
       
        enter = parseInt(prompt("Password must be between 8 and 128."));
        generatePassword();

    } 
    
    else {
        confirmNumber = confirm("Do you want numbers?");
        confirmSpecial = confirm("Do you want special characters?");
        confirmUppercase = confirm("Do you want uppercase letters?");
        confirmLowercase = confirm("Do you want lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmSpecial && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        options = alert("You must select at least one option.");
        generatePassword();
    }

    // Else if for 4 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase && confirmLowercase) {
        options = special.concat(number, az, az2);
    }

    // Else if for 3 positive options
    else if (confirmSpecial && confirmNumber && confirmUppercase) {
        options = special.concat(number, az2);
    }

    else if (confirmSpecial && confirmNumber && confirmLowercase) {
        options = special.concat(number, az);
    }

    else if (confirmSpecial && confirmLowercase && confirmUppercase) {
        options = special.concat(az, az2);
    }

    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        options = number.concat(az, az2);
    }

    // Else if for 2 positive options 
    else if (confirmSpecial && confirmNumber) {
        options = special.concat(number);
    }
    
    else if (confirmSpecial && confirmLowercase) {
        options = special.concat(az);
    } 
    
    else if (confirmSpecial && confirmUppercase) {
        options = special.concat(az2);
    }

    else if (confirmLowercase && confirmNumber) {
        options = az.concat(number);
    } 
    
    else if (confirmLowercase && confirmUppercase) {
        options = az.concat(az2);
    } 
    
    else if (confirmNumber && confirmUppercase) {
        options = number.concat(az2);
    }

    // Else if for 1 positive option
    else if (confirmSpecial) {
        options = special;
    }

    else if (confirmNumber) {
        options = number;
    }

    else if (confirmLowercase) {
        options = az;
    }

    // Space variable for uppercase conversion
    else if (confirmUppercase) {
        options = space.concat(az2);
    };

    //Clears textbox for each newly generated password
    var password = [];

    // Randomization for variables
    for (var i = 0; i < enter; i++) {
        var pickOptions = options[Math.floor(Math.random() * options.length)];
        password.push(pickOptions);
    }
   
    // Converts password into a string
    var pw = password.join("");
    UserInput(pw);
    return pw;
    }

    // This places the password into the textbox
    function UserInput(pw) {
        document.getElementById("password").textContent = pw;
    }
