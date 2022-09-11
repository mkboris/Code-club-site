function checkPassword() {
    var passwordBoxObject = document.getElementById("passwordBox");
    var passwordEntered = passwordBoxObject.value;
    console.log("User entered password:", passwordEntered)

    var sitePassword = "codeclub";
    if (passwordEntered == sitePassword) {
        console.log("Allow");
        window.location.assign("members.html");
    } else {
        console.log("Block");

        document.getElementById
        ("incorrect-password").style.color = "red";

        document.getElementById
        ("incorrect-password").
        innerHTML = "Incorrect password. Please try again...";
    }
     }