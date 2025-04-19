import mongoose from "mongoose";

async function conn(params) {
    
    try{

        const senhaDB = process.env.PASSWORD_DB
        const usuario = process.env.USUARIO_DB
        
        await mongoose.connect(`mongodb+srv://${usuario}:${senhaDB}@partytime.dr1sfmf.mongodb.net/?retryWrites=true&w=majority&appName=partytime`)

        console.log("conectado ao banco")


    }catch (error) {
        console.log("erro ao conectar DB", error)
    }




}

export default conn