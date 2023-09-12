
const db = require("./db");

const data = {
    name: "Vrutik",
    email: "abc@gmail.com",
    Password: "12346",
    mobile_no: 1234567890,
    usertype: "Customer"
};

const evalid =/^[A-Za-z0-9]+@^[A-Za-z]+\.[A-Za-z]{2,5}/; 

if(evalid.test(data.email)){
    console.log("Invalid Eamil");
    return false;
}

if(data.Password.length <6 ){
    console.log("Invalid Password");
    return false;

}

if (data.mobile_no <1000000000 || data.mobile_no >9999999999){
    console.log("error");
    return false;

}


async function register() {
    const userData = await db.collection("users").insertOne({
        name: data.name,
        email: data.email,
        password: data.Password,
        mobile_no: data.mobile_no,
        usertype: data.usertype,
        date: Date()
    });

    if (!userData) {
        console.log("Registration Failed..");
        return false;
    }

    console.log("Registered successsfully..");
}

register(); 
module.exports = register;

// const login = async () => {}


const userData = {
    'email': "abc@gmail.com",
    'password': "12345"
}

async function login() {
    const user = await db.collection('users').findOne({ email: userData.email })
    if (!user) {
        console.log("User not found.");
        return false;
    }
    if (user.password !== data.password) {
        console.log("Incorrect Password.");
        return false;
    }
    console.log("login Succesfully..");
}

//module.exports = login();

// Update 

async function update() {
    const Temp = await db.collection('users').updateOne({ email: "abc@gmail.com" }, { $set: { mobile_no: 1234567890 } })
    if (!Temp.modifiedCount) {
        console.log("Updating Failed.");
        return false;
    }

    console.log("Update Succesfully..");
}

// update();

// Delete

async function delete_1() {
    const Temp = await db.collection('users').deleteOne({ email: "abc@123gmail.com" })
    if (!Temp.deletedCount) {
        console.log("Error.");
        return false;
    }

    console.log("Delete Succesfully..");
}

//delete_1();