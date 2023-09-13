const db = require("./db");

const data ={
    name: "Vrutik",
    email: "abc@gmail.com",
    mobile_no: 1234567890,
    State: ['Gujrat(GJ)','AndhraPradesh(AP)','ArunachalPradesh(AR)','Assam(AS)','Bihar(BR)','Chhattigart(CG)','GOA(GA)','Haryana(HR)','HimachalPradesh(HP)','Jammu and Kashmir(JK)',],
    city: "Surat",
    Pin_code: 395009,
    bikeManufacturers: ['Suzuki','RoyalEnfield','Kawasaki','Harley-Davidson','yamahamotorcompany','Aprilia','Honda','KTM','BajajAuto','Ducati','Benelli',],
    Modelname: "Access125",
    YearOfManufacturing: [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,'Before2000'],
    BikeFrontSideImage: "Clickordragafiletothisareatoupload",
    BikeBackSideImage: "Clickordragafiletothisareatoupload",
    BikeRightSideImage: "Clickordragafiletothisareatoupload",
    BikeEngineBayImage: "Clickordragafiletothisareatoupload"

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

  ServiceEnquiry();

 async function update() {
    const Temp = await db.collection('ServiceEnquiry').updateOne({ email: "abc@gmail.com" }, { $set: { mobile_no: 97558889825 } })
    if (!Temp.modifiedCount) {
        console.log("Updating Failed.");
        return false;
    }

    console.log("Update Successfully..");
}

// update();


async function delete_1() {
    const Temp = await db.collection('ServiceEnquiry').deleteOne({ email: "abc@gmail.com" })
    if (!Temp.deletedCount) {
        console.log("Error.");
        return false;
    }

    console.log("Delete Successfully..");
}

// delete_1();