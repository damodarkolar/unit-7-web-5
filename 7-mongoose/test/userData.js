const connectDataBase=require("./dataBase/dataBaseConnection");
const {useSchema,userModel}=require("./dataBase/dataBasefunctions")


class UserData{
    constructor(){
        connectDataBase();
    }

    async getData(){
        const data=userModel.find({language:"German"}).limit(10)
        return data;
    }
}



module.exports=UserData;