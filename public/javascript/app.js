// the object is stocking the user data 
let bank = {
    users : []
}

// the user should choose the option (sign up, Login, changing the password)

function checkin () {
    let User = prompt("choose the option : ' sign up ', 'login ', or ' change the password '")

    switch (User){
        case "sign up" :
            signUp()
            return checkin()
        case "login" :
            login()
            return checkin()
            default :
            alert("invalid option" + (User) + "choose the right option")
            return checkin()
        case "change password" :
            change_password()
            return checkin() 
        
    }
}

let userFullName = ""
let userEmail = ""
let userAge = ""
let userPassword = ""

// option Sign up 

function signUp() {

    let fullName = prompt("Enter your Full Name") 
    while (true) {
        if(!fullName) {
            alert("the option is Empty ! please enter your full name")
            return signUp()
        }
        break
    }
    // the name shouldn't be less than 5 character and (no spaces)
    let fullNameLength = fullName.replace(/\s+/g, "").length
    if (fullNameLength < 5){
        alert("your fullname should not be less than 5 characters \n your full name has" + (fullNameLength))
        return
    }
    // no special character in full name 

    for (let letter of fullName){
        if(/[#@\-+\*/]/.test(letter)) {
            alert("the name shouldn't contain" + (letter))
            return
        }
    }
    // the first letter (uppercase) other letters (lowercase)
    fullName = fullName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
    // removing with spaces
    fullName = fullName.replace(/\s+/g, " ").trim()
    alert("fullName Registred: " + fullName)


    //*Email:
    let email
    let validEmail = false

    
}