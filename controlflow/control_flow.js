let userRole = "Admin"
let accesslevel

if(userRole =="Admin")
     accesslevel="Full access gained"
else if(userRole == "Manager")
     accesslevel ="Half access gained"
else 
    accesslevel ="Not give the full access"


console.log("accesslevel",accesslevel)

let isloogin = true 
let usermessage

if(isloogin)
{
    if(userRole=="Admin")
       usermessage ="welcome admin"
    else
       usermessage = "welcome user "
}
else
{
    usermessage ="You are not allowed to access"
}

console.log("User Message ", usermessage)

let usertype ="subscriber"
let usercategory

switch(usertype)
{
    case "Admin":
        usercategory ="Adminstrator"
        break

    case "User":
        usercategory ="User"
        break
    case "subscriber":
        usercategory ="subscriber"
        break
    default:
        usercategory = "unknown"
        break
}

console.log("Usercategory :",usercategory)

let isauthenticated = true

let authentication = isauthenticated ? "Authorized": "Not a authorized "

console.log(authentication)