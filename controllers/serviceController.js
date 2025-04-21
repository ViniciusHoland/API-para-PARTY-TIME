import  ServiceModule  from '../models/Service.js'


const { Service } = ServiceModule

const serviceController = {

    create: async(req, res) => {
        try{

            const service= {
                name : req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.image,
            }


            const response = await Service.create(service)

            res.status(201).json({response, msg: "Servico criado com sucesso"})


        } catch (error){
            console.log(error)
        }
    },

    getAllServices: async (req,res) => {
        try{

            const response = await Service.find()

            res.status(200).json({msg: "successo ao buscar servicos", response})


        } catch (error) {
            console.log("erro ao buscar todos os servicos", error)
        }
    }


}


export default serviceController