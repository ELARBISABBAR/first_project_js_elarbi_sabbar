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

    while (!validEmail){
                email = prompt("Enter an E-mail")

        // if email is empty
        if (!email) {
            alert(" the option is Empty ! Please enter your email.")
            return
        }

        // remove spaces and convert to lowercase
        email = email.trim().toLowerCase()

        //check for exactly one "@"
        if (!email.includes("@") || email.split("@").length !==2){
            alert("the email should contain one '@'. ")
            continue
        }
        // check for spaces inside the email
        if(email.includes(" ")) {
            alert("Your email contains spaces. Please enter a valid email.")
            continue
        }

        // check email length
        if (email.length < 10) {
            alert("Email must contain more than 10 characters. ")
            continue
        }

        // check uniqueness of email

        let uniqueEmail = true
        for(let user of bank.users){
            if(user.email === email){
            uniqueEmail = false
            break
            }
        }

        if(!uniqueEmail) {
            alert("This email is already used. Enter a new one")
            continue
        }

        // if all checks pass 
        validEmail = true
        alert("Email registred: " + email)

    }

    //Age

    let age = prompt("enter your age")
    if (!age) {
        alert("the option is Empty ! Please enter your age")
        return
    }
    
    age = age.trim()

    let noDigit = false
    for(let index = 0; index < age.length; index++){
        if ( isNaN(age[index])) {
            noDigit = true
            break
        }
    }

    if(noDigit) {
        alert("too many characters")
        return
    }else if (age.length > 3 ) {
        alert("it shouldn't have more than 2 digits")
    } 
    alert("your age is saved : " + age)

    // password
    
    let password = prompt("Enter a password")
    if(!password) {
        alert("enter a valid password")
        return
    }
    password = password.trim()

    if (password.includes(" ")) {
        alert("the password should not contain space")
        return
    }

    //requiring at least one character

    let specialChar = /[#@\-+\*/]/.test(password)
    if (!specialChar) {
        alert("password must contain at least one special character ")
        return  
    }

    // confirmation the password

    let confirmPassword
    do {
        confirmPassword = prompt("confrim your password")
        if(password !== confirmPassword) {
            alert("password doesn't match")
        }
    } while (password !== confirmPassword)
        alert("password accepted: " + password)

        bank.users.push({
            fullName : fullName,
            email : email,
            age : age,
            password : password,
            balance : 400,
        })
        alert("Registration complete!")

        console.log("User registered : " + (fullName), + "Email : " + (email), + "Age : " + (age));
        

    
}