// CODE ALONG

// 1. Create a secret username and password.
//  - The variables are declared already. Update the values.
let secretUsername = ("adimin");
let secretPassword = ("notAPassword?");
let button = document.querySelector("button");
let lockoutCount = 10;

let buttonClicked = function() {
    let username = document.querySelector(".username").value;
    let password = document.querySelector(".password").value;
    let message = document.querySelector(".message");

    // 2. Create a compound conditional statement to check for the following:
    //  - If the username AND password is correct, update the text of the message div to say "Success!"
    
    // CODE SOLO
    // 3. Create additional compound conditionals that check for the following:
    //  - If the username is correct AND the password is incorrect, update the text of the message div to say "Wrong password - be careful, don't mess this up too many times."
    //  - If the password is correct AND the username is incorrect, update the text of the message div to say "Wrong username - is there a typo?"
    //  - Finally, if the password is incorrect AND the username is incorrect, update the text of the message div to say "Incorrect username and password. Hmm. Suspicious."
    
    if (username === secretUsername && password === secretPassword) {
        message.innerHTML = "Success!";
    } else {
        if (username=== secretUsername && password !== secretPassword){
            message.innerHTML = "Wrong password - be careful, don't mess this up too many times.";
        } else if (username !== secretUsername&&password === secretUsername){
            message.innerHTML = "Wrong username - is there a typo?";
        } else if (username === "") {
            message.innerHTML = "You need to enter SOMETHING for your username!";
        } else if (password === "") {
            message.innerHTML = "You need to enter SOMETHING for your password!";
        } else {
            message.innerHTML = "Incorrect username and password. Hmm. Suspicious.";
        }
        
        lockoutCount--;

        if (lockoutCount===0){
            message.innerHTML = "Nice try, but you're outta time Skippy!";
            button.removeEventListener("click",buttonClicked);
        } else if (lockoutCount<=5) {
            console.log("Hey something weird is going on. Says "+lockoutCount+" attempts left.");
        }
    }

    
    // Bonus: If the username OR password fields are empty, update the text of the message div to say "You need to enter SOMETHING."
    //  - Hint: What string represents an "empty" message.
    
}

button.addEventListener("click", buttonClicked);
