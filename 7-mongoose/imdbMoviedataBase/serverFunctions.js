const dataBaseConnection=require("./moviesDataBase/dataBaseConnection");
const { movieDataModel }=require("./moviesDataBase/dataBaseFunctions");


class MoviesDataServer{
    constructor(){
        dataBaseConnection();
    }

    /*Get All movies Data */
    async getMoviesData(){
        let data=await movieDataModel.find()
        return data
    }

    /*Add movie data into database*/
    async addMovieToData(data){
        await movieDataModel.insertMany([data]);
        return "Data Added into Database";
    }


    /*Delete movie from database*/
    async deleteMovieFromData(id){
        await movieDataModel.findByIdAndDelete(id)
        return "Data Deleted From database";
    }


    /*Update Data in database*/
    async updateData(id,data){
        await movieDataModel.findByIdAndUpdate({id},data);
        return "Data Updated";
    }

}




module.exports=MoviesDataServer