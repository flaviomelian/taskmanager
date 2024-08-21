const { Sequelize } = require("sequelize");
const env = require("dotenv").config();

const connection = new Sequelize(
    //DB_credentials:
    env.parsed.DB_NAME,
    env.parsed.DB_USER,
    env.parsed.DB_PASSWD,
    {   //DB_info:
        host: env.parsed.DB_HOST,
        dialect: "mysql",
        port: env.parsed.DB_PORT,
        logging: false,
    }
);

const checkDb = async () => {
    try{
        await connection.authenticate();
        console.log("Connected");
    }catch(error){
        console.log(error);
    }
}

const syncModels = async () => {
    try{
        await connection.sync();
        console.log("Models added");
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    connection,
    checkDb,
    syncModels,
};