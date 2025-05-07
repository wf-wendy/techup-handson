var age=20
age = 65

var username = "preshant"
var password = "techup"

var isMale = false
var isLoggedIn = false

var blog_posts = ["Today was a good day", "The sky is blue", 
     "It's raining heavily now"]

// console.log(age)

// console.log(username);
// console.log(password);
// console.log(isMale);
// console.log(isLoggedIn);

// console.log(blog_posts);

if (isMale == true) {
    console.log ("U r male")
} else {
    console.log ("u r female")
}

while (age < 70) {
    console.log ("Ur age is " + age)
    age ++
}

function sayHello() {
    alert ("Hello everyone")
}

function showAge () {
    // Get the value from the input field of ID #user-input
    // Store this value in a variable called user_input
    var user_input = document.getElementById("user-input").value

    // Update the content for the HTML element with ID #header-age with 
    // whatever the user_input varible contains
    document.getElementById("header-age").textContent = user_input
}

