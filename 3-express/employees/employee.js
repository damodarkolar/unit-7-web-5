const fs=require("fs");
const {v4:uuidv4}=require("uuid");

class Employees{
    constructor(){
        this.path="./data.json";
       const info=fs.readFileSync(this.path, {encoding:"UTF-8"});
        this.data=JSON.parse(info);
    }
    /*Get Details of employees*/
    getDetails(){
        let info=this.data;
        return info;
    }
    /*Add Details of employees*/
    addDetails(personInfo){
        let max=0;
        let info=this.data;
        info.employees?.forEach(element => {
            max=element.id
        });
        personInfo.id=((+max)+1);
        info.employees.push(personInfo);
        fs.writeFileSync(this.path, JSON.stringify(info, null, 2), {encoding:"UTF-8"});
        console.log(info)
        return "Data Added";
    }
    /*Delete Details of employees*/
    deleteEmployee(id){
        let info=this.data;
       let newData= info.employees?.filter((ele)=>ele.id!=id)
        newData=JSON.stringify({employees:newData}, null, 2);
        fs.writeFileSync(this.path, newData,{ encoding:"UTF-8" })
        return "Deleted "
    }
    getEmployeeDetail(id){
        let info=this.data;
        let details=info.employees?.filter(ele=>ele.id==id)
        console.log(details)
        return details
    }
    /*Update Details of employees*/
    updateEmployee(id){
        return this.data;        
    }
}


module.exports=Employees