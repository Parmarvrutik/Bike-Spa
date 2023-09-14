const db = require("./db");

const data ={
    name: "Vrutik",
    email: "abc@gmail.com",
    mobile_no: 1234567890,
    Accessories: ['SilencerGuard','SareeGuard','SideGuard','SideViewMirror',],
    BodyParts: ['StickerKit','RiderFootRest','MufflerSet','MainStand','LockSet','Indicatorlight','Horn','Headlight','HandleBar']
}

const evalid =/^[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]{2,5}/; 

if(!evalid.test(data.email)){
    console.log("Invalid Eamil");
    return false;
}

if (data.mobile_no <1000000000 || data.mobile_no >9999999999){
    console.log("error");
    return false;

}

async function SparePartsPurchase(){
    const post = await db.collection("SparePartsPurchase").insertOne(data);

    if(!post){
        console.log("Error");
        return false;
    }
    console.log("Spare Parts Purchase Successfully");
}

SparePartsPurchase();

async function update() {
    const Temp = await db.collection('SparePartsPurchase').updateOne({ email: "abc@gmail.com" }, { $set: { mobile_no: 97558889825 } })
    if (!Temp.modifiedCount) {
        console.log("Updating Failed.");
        return false;
    }

    console.log("Update Successfully..");
}

// update();

async function delete_1() {
    const Temp = await db.collection('SparePartsPurchase').deleteOne({ email: "abc@gmail.com" })
    if (!Temp.deletedCount) {
        console.log("Error.");
        return false;
    }

    console.log("Delete Successfully..");
}

// delete_1();

