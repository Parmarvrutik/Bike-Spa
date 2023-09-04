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


}

async function ServiceEnquiry(){
    const post = await db.collection("ServiceEnquiry").insertOne(data);

    if(!post){
        console.log("Error");
        return false;
    }
    console.log("Service Enquiry Successfully");
}

ServiceEnquiry();