const db = require("./db");

const data ={
    name: "Vrutik",
    email: "abc@gmail.com",
    mobile_no: 1234567890,
    state: "Gujrat",
    city: "Surat",
    Pin_code: 395009,
    bikeManufacturers: "ImportantParts",
    Modelname: "HeroHonda",
    YearOfManufacturing: 2023


};

const evalid =/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,5}/; 

if(!evalid.test(data.email)){
    console.log("Invalid Eamil");
    return false;
}

if(data.Pin_code.length <6 ){
    console.log("Invalid Pincode");
    return false;

}

if (data.mobile_no <1000000000 || data.mobile_no >9999999999){
    console.log("error");
    return false;

}


async function ServiceEnquiry(){
    const post = await db.collection("ServiceEnquiry").insertOne(data);

    if(!post){
        console.log("Error");
        return false;
    }
    console.log("Service Enquiry Successfully");
}

//   ServiceEnquiry();

 async function update() {
    const Temp = await db.collection('ServiceEnquiry').updateOne({ email: "abc@gmail.com" }, { $set: { mobile_no: 97558889825 } })
    if (!Temp.modifiedCount) {
        console.log("Updating Failed.");
        return false;
    }

    console.log("Update Succesfully..");
}

update();


async function delete_1() {
    const Temp = await db.collection('ServiceEnquiry').deleteOne({ email: "abc@gmail.com" })
    if (!Temp.deletedCount) {
        console.log("Error.");
        return false;
    }

    console.log("Delete Succesfully..");
}

// delete_1();