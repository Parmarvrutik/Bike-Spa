const db = require("./db");

const data ={
    CheckEngineOil: "TopSynthethicOils",
    CheckFilter: "Clean & Maintain",
    ChangeBreakPed: "RemovetheOldBrakePads",
    ChangeBreakCable: "RmovetheOldBreackCable",
    ChangeBreakLever: "RemovetheOldBreack",
    PremiumeWash: "SyntheticFoamWash"


}

async function ServiceRequired(){
    const post = await db.collection("ServiceRequired").insertOne(data);

    if(!post){
        console.log("Error");
        return false;
    }
    console.log("Service Required Successfully");
}

 ServiceRequired();

async function update() {
    const Temp = await db.collection('ServiceRequired').updateOne({ CheckFilter: "Clean & Maintain" }, { $set: {ChangeBreakCable: "ChangetheOldBreackCable" } })
    if (!Temp.modifiedCount) {
        console.log("Updating Failed.");
        return false;
    }

    console.log("Update Successfully..");
}

// update();

async function delete_1() {
    const Temp = await db.collection('ServiceRequired').deleteOne({ ChangeBreakLever: "RemovetheOldBreack" })
    if (!Temp.deletedCount) {
        console.log("Error.");
        return false;
    }

    console.log("Delete Successfully..");
}

//  delete_1();